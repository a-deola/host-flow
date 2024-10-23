function Summary({
  summaryName,
  summaryValue,
  summaryRating,
  sign,
}: {
  summaryName: string;
  summaryValue: string;
  summaryRating: string;
  sign: string;
}) {
  const textColor =
    sign === "decrease" ? "text-destructive" : "text-success-foreground";

  return (
    <div className="flex flex-col p-4 border transition-shadow duration-300 hover:shadow-lg hover:dark:shadow-white/50 hover:shadow-[#8576FF]/50 dark:bg-card dark:border-none">
      <div className="flex items-center gap-1 font-bold text-muted-foreground dark:text-white">
        <h3>{summaryName}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          >
            <circle cx={12} cy={12} r={10}></circle>
            <path d="M12 16v-4m0-4h.01"></path>
          </g>
        </svg>
      </div>
      <div className="flex gap-2">
        <p className="font-semibold">{summaryValue}</p>
        <span className={`flex justify-center items-center gap-1 ${textColor}`}>
          {sign === "decrease" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 18L6 6m2 12h10V8"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18 6L6 18M8 6h10v10"
              ></path>
            </svg>
          )}
          <p className="text-xs">
            {" "}
            <span>{sign === "decrease" ? "-" : "+"}</span>
            {summaryRating}
          </p>
        </span>
      </div>
    </div>
  );
}

export default Summary;
