import EventChart from "./components/EventChart";
import { EventsTable } from "./components/EventsTable";
import { ImgCarousel } from "./components/ImgCarousel";
import Subheading from "./components/Subheading";
import Summary from "./components/Summary";
import { columns } from "./components/columns";
import { events } from "./data";

export default function Home() {
  return (
    <main>
      <header className="px-5 py-3">
        <h1 className="text-xl lg:text-2xl whitespace-nowrap">
          Welcome! here&apos;s your summary
        </h1>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 my-3 px-5">
        <Summary
          summaryName="Total Events"
          summaryValue="100,000"
          summaryRating="5.0%"
          sign="increase"
        />
        <Summary
          summaryName="Active Speakers"
          summaryValue="20"
          summaryRating="5.0%"
          sign="decrease"
        />
        <Summary
          summaryName="Total Registrations"
          summaryValue="300"
          summaryRating="5.0%"
          sign="increase"
        />
        <Summary
          summaryName="Total Revenue"
          summaryValue="$500,000"
          summaryRating="5.0%"
          sign="increase"
        />
      </section>
      <Subheading text="Event Registrations per month" />
      <section className="px-5">
        <div className="flex flex-col md:flex-row gap-5">
          <EventChart />
          <ImgCarousel />
        </div>
      </section>
      <Subheading text="Events History" />
      <section>
        <div className="lg:px-5">
          <EventsTable columns={columns} data={events} />
        </div>
      </section>
    </main>
  );
}
