import EventChart from "./EventChart";
import { EventsTable } from "./EventsTable";
import { ImgCarousel } from "./ImgCarousel";
import Subheading from "./Subheading";
import Summary from "./Summary";
import { columns } from "./columns";
import { events } from "../data";

function Dashboard() {
  return (
    <div className="p-5">
      <h1 className="text-2xl">Welcome! here's your summary</h1>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 my-3">
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
      <section>
        <Subheading text="Event Registrations per month" />
        <div className="flex flex-col md:flex-row gap-5">
          <EventChart />
          <ImgCarousel />
        </div>
      </section>
      <section>
        <Subheading text="Events History" />
        <EventsTable columns={columns} data={events} />
      </section>
    </div>
  );
}

export default Dashboard;
