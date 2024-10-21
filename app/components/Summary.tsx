import React from "react";

function Summary({
  summaryName,
  summaryValue,
  summaryRating,
}: {
  summaryName: string;
  summaryValue: string;
  summaryRating: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center p-4 border">
      <div className="flex justify-center">
        <h3>{summaryName}</h3>
      </div>
      <div className="flex justify-center items-center gap-2">
        <p>{summaryValue}</p> <span className="text-xs">{summaryRating}</span>
      </div>
    </div>
  );
}

export default Summary;
