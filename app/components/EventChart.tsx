"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "./ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

export const description = "A bar chart";

const chartData = [
  { month: "January", events: 491 },
  { month: "February", events: 944 },
  { month: "March", events: 202 },
  { month: "April", events: 799 },
  { month: "May", events: 397 },
  { month: "June", events: 367 },
  { month: "July", events: 671 },
  { month: "August", events: 762 },
  { month: "September", events: 341 },
  { month: "October", events: 202 },
  { month: "November", events: 263 },
  { month: "December", events: 843 },
];

const chartConfig = {
  events: {
    label: "Events",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function EventChart() {
  return (
    <Card className="w-full lg:w-1/2">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{ top: 20, left: 20, right: 20, bottom: 20 }}
          >
            <CartesianGrid stroke="#ADA9BB" strokeDasharray="3 3" />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={5}
              axisLine={true}
              tickFormatter={(value) => value.slice(0, 2)}
            />
            <YAxis
              dataKey="events"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="events" fill="var(--color-events)" radius={2} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
export default EventChart;
