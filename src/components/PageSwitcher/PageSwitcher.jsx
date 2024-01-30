import { useEffect, useState } from "react";
// const [pageAmount, setPageAmount] = useState(Math.ceil(array.length / perPage));
// array.slice(pageNumber, pageNumber + perPage)

const PageSwitcher = ({ array, perPage, onChange }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [newPageNumber, setNewPageNumber] = useState(0);

  const firstPage = () => {
    setPageNumber(0);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const changePageNumber = (event) => {
    setNewPageNumber(Number(event.target.value));
  };

  const enterPageNumber = () => {
    setPageNumber(newPageNumber);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const lastPage = () => {
    setPageNumber(array.length);
  };

  useEffect(() => {
    onChange([...array[pageNumber]]);
  }, [pageNumber]);

  return (
    <div>
      <div>
        <button type="button" onClick={firstPage}>
          First page
        </button>
        <button type="button" onClick={previousPage}>
          Previous page
        </button>
        <input type="text" onChange={changePageNumber} value={newPageNumber} />
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
