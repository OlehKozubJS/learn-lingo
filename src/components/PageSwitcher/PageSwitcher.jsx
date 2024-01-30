import { useEffect, useState } from "react";

// array.slice(pageNumber, pageNumber + perPage)

const PageSwitcher = ({ array, perPage, onChange }) => {
  const [pageAmount, setPageAmount] = useState(
    Math.ceil(array.length / perPage)
  );
  const [pageNumber, setPageNumber] = useState(1);
  //const [newPageNumber, setNewPageNumber] = useState(0);

  const firstPage = () => {
    setPageNumber(1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  const changePageNumber = (event) => {
    setPageNumber(Number(event.target.value));
  };

  const enterPageNumber = () => {
    if (pageNumber > 0 && pageNumber <= pageAmount) {
      onChange([
        array[pageNumber * 3 - 3],
        array[pageNumber * 3 - 2],
        array[pageNumber * 3 - 1],
      ]);
    }
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const lastPage = () => {
    setPageNumber(pageAmount);
  };

  useEffect(() => {
    if (pageNumber > 0 && pageNumber <= pageAmount) {
      onChange([
        array[pageNumber * 3 - 3],
        array[pageNumber * 3 - 2],
        array[pageNumber * 3 - 1],
      ]);
    }
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
      <p>
        Page {pageNumber}/{array.length}
      </p>
    </div>
  );
};

export { PageSwitcher };
