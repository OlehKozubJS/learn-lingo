import { useState, useEffect } from "react";

const PageSwitcherTest = ({ list, perPage, onChange }) => {
  const [amount /* */, setAmount /**/] = useState(
    Math.ceil(list.length / perPage)
  );
  const [number, setNumber] = useState(1);

  const toPreviousPage = () => {
    setNumber(number - 1);
  };

  const toNextPage = () => {
    setNumber(number + 1);
  };
  /* */
  useEffect(() => {
    setAmount(Math.ceil(list.length / perPage));
    setNumber(1);
  }, [list]);
  /* */
  useEffect(() => {
    onChange(list.slice(number * perPage - perPage, number * perPage));
    console.log(list);
  }, [number]);

  return (
    <div>
      {number !== 1 && (
        <button type="button" onClick={toPreviousPage}>
          Previous
        </button>
      )}
      {number !== amount && (
        <button type="button" onClick={toNextPage}>
          Next
        </button>
      )}
      <div>Page: {number}</div>
    </div>
  );
};

export { PageSwitcherTest };
