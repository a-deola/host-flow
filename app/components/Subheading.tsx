import React from "react";

function Subheading({ text }: { text: string }) {
  return <h1 className="text-lg font-semibold my-2">{text}</h1>;
}

export default Subheading;
