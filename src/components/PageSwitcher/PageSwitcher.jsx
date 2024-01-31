import { useEffect, useState } from "react";

// array.slice(pageNumber, pageNumber + perPage)

const PageSwitcher = ({ list, perPage, onChange }) => {
  const [pageAmount, setPageAmount] = useState(
    Math.ceil(list.length / perPage)
  );
  const [pageNumber, setPageNumber] = useState(1);
  //const [newPageNumber, setNewPageNumber] = useState(0);

  const firstPage = () => {
    if (pageNumber !== 1) {
      setPageNumber(1);
    }
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
        list[pageNumber * 3 - 3],
        list[pageNumber * 3 - 2],
        list[pageNumber * 3 - 1],
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
        list[pageNumber * 3 - 3],
        list[pageNumber * 3 - 2],
        list[pageNumber * 3 - 1],
      ]);
    }
  }, [pageNumber]);

  return (
    <div>
      <div>
        {pageNumber !== 1 ? (
          <button type="button" onClick={firstPage}>
            First page
          </button>
        ) : (
          <div>First page</div>
        )}
        {pageNumber !== 1 ? (
          <button type="button" onClick={previousPage}>
            Previous page
          </button>
        ) : (
          <div>Previous page</div>
        )}
        <input type="text" onChange={changePageNumber} value={pageNumber} />
        <button type="button" onClick={enterPageNumber}>
          Enter page number
        </button>
        {pageNumber !== pageAmount ? (
          <button type="button" onClick={nextPage}>
            Next page
          </button>
        ) : (
          <div>Next page</div>
        )}
        {pageNumber !== pageAmount ? (
          <button type="button" onClick={lastPage}>
            Last page
          </button>
        ) : (
          <div>Last page</div>
        )}
      </div>
      <p>
        Page {pageNumber}/{pageAmount}
      </p>
    </div>
  );
};

export { PageSwitcher };
