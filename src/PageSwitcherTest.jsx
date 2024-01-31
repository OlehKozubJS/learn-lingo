import { useState, useEffect } from "react";

const PageSwitcherTest = ({ list, perPage }) => {
  const [amount, setAmount] = useState(Math.ceil(list, perPage));
  const [number, setNumber] = useState(1);

  return (
    <div>
      {number !== 1 && <button>Previous</button>}
      {number !== amount && <button>Next</button>}
      <div>Page: {number}</div>
    </div>
  );
};

export { PageSwitcherTest };
