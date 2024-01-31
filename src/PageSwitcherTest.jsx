import { useState, useEffect } from "react";

const PageSwitcherTest = ({ list, perPage, onChange }) => {
  const [number, setNumber] = useState(1);

  const toPreviousPage = () => {
    setNumber(number - 1);
  };

  const toNextPage = () => {
    setNumber(number + 1);
  };

  useEffect(() => {
    onChange(list.slice(number * perPage - perPage, number * perPage));
  }, [number, list]);

  return (
    <div>
      {number !== 1 && (
        <button type="button" onClick={toPreviousPage}>
          Previous
        </button>
      )}
      {number !== Math.ceil(list.length / perPage) && (
        <button type="button" onClick={toNextPage}>
          Next
        </button>
      )}
      <p>Page: {number}</p>
    </div>
  );
};

export { PageSwitcherTest };
