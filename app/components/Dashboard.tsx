import EventChart from "./EventChart";
import { ImgCarousel } from "./ImgCarousel";
import Subheading from "./Subheading";
import Summary from "./Summary";

function Dashboard() {
  return (
    <section className="px-5 py-8">
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
        <div className="flex flex-col lg:flex-row gap-2">
          <EventChart />
          <ImgCarousel />
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
