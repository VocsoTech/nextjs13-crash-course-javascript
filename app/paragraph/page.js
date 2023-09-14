"use client";
import React, { useState } from "react";

const LongText = () => {
  const exampleText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Morbi eget nisl vel augue efficitur vehicula nec nec neque. Sed non turpis nec leo congue feugiat. Proin commodo augue vel ultrices.";

  return (
    <div className="p-4">
      <h1 className="text-5xl">Long Text Example</h1>
      <ReadMore text={exampleText} maxChars={100} />
    </div>
  );
};
const ReadMore = ({ text, maxChars }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex gap-2">
      {showAll ? text : text.slice(0, maxChars)}
      {text.length > maxChars && (
        <button onClick={toggleShowAll}>
          {showAll ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default LongText;

// export default ReadMore;
