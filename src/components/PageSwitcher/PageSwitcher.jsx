import { useState } from "react";

const PageSwitcher = ({ array, perPage, onChange }) => {
  const [pageAmount, setPageAmount] = useState(array.length);
  const [pageNumber, setPageNumber] = useState(0);

  const firstPage = () => {
    setPageNumber(0);
  };
  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const changePageNumber = (event) => {
    setPageNumber(event.target.value);
  };
  const enterPageNumber = () => {
    onChange(array.slice(pageNumber, pageNumber + perPage));
  };
  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const lastPage = () => {};

  return (
    <div>
      <div>
        <button type="button" onClick={firstPage}>
          First page
        </button>
        <button type="button" onClick={previousPage}>
          Previous page
        </button>
        <input type="text" onChange={changePageNumber} value={pageNumber} />
        <button type="button" onClick={enterPageNumber}>
          Enter page number
        </button>
        <button type="button" onClick={nextPage}>
          Next page
        </button>
        <button type="button" onClick={lastPage}>
          Last page
        </button>
      </div>
      <p>Page 0/0</p>
    </div>
  );
};

export { PageSwitcher };
