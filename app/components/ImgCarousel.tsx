"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { images, news } from "../data";
import Shimmer from "./Shimmer";
import { Skeleton } from "./ui/skeleton";

export function ImgCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative mx-auto w-full lg:w-1/2">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex  items-center justify-center">
                  <Image
                    src={image}
                    alt="image"
                    width={1920}
                    height={1920}
                    onLoad={() => setIsImageLoaded(true)}
                    className={`transition-opacity ${
                      isImageLoaded ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  {!isImageLoaded && (
                    <div className="relative pl-5">
                      <Shimmer />
                      <Skeleton />
                    </div>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="absolute bottom-1 md:bottom-5 px-3">
        <div className="py-2 text-white text-[12px] md:text-sm text-justify">
          <h3 className="font-bold">Latest News & Updates</h3>
          <p className="h-10">{news[current - 1]}</p>
        </div>
        <div className="flex justify-center ">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                api?.scrollTo(index);
                setCurrent(index + 1);
                Autoplay();
              }}
              className={`py-[2px] px-2 ml-2 rounded transition duration-200 ${
                current === index + 1 ? "bg-white" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
