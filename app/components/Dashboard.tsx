import Summary from "./Summary";

function Dashboard() {
  return (
    <section className="p-5">
      <h1 className="text-2xl font-medium">Welcome! here's your summary</h1>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 my-3">
        <Summary
          summaryName="Total Events"
          summaryValue="20"
          summaryRating="-4.5%"
        />
        <Summary
          summaryName="Total Speakers"
          summaryValue="20"
          summaryRating="+4.5%"
        />
        <Summary
          summaryName="Total Reports"
          summaryValue="20"
          summaryRating="0%"
        />
        <Summary
          summaryName="Total Notifications"
          summaryValue="20"
          summaryRating="+4.5%"
        />
      </section>
      <section>
        <h3>Event Registrations per month</h3>
        <div>
          <div></div>
          <div></div>
        </div>
      </section>
    </section>
  );
}

export default Dashboard;
