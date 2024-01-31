import { useEffect, useState } from "react";

const PageSwitcher = ({ list, perPage, onChange }) => {
  const [pageAmount, setPageAmount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [newPageNumber, setNewPageNumber] = useState(1);

  const firstPage = () => {
    setPageNumber(1);
    setNewPageNumber(1);
  };

  const previousPage = () => {
    setPageNumber(pageNumber - 1);
    setNewPageNumber(pageNumber - 1);
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    setNewPageNumber(pageAmount + 1);
  };

  const lastPage = () => {
    setPageNumber(pageAmount);
    setNewPageNumber(pageAmount);
  };

  useEffect(() => {
    setPageAmount(Math.ceil(list.length / perPage));
  }, [list]);

  useEffect(() => {
    onChange(list.slice((pageNumber - 1) * perPage, pageNumber * perPage));
  }, [pageNumber, list]);

  return (
    <div>
      <div>
        {pageNumber !== 1 && pageAmount !== 0 ? (
          <button type="button" onClick={firstPage}>
            First page
          </button>
        ) : (
          <div>First page</div>
        )}
        {pageNumber !== 1 && pageAmount !== 0 ? (
          <button type="button" onClick={previousPage}>
            Previous page
          </button>
        ) : (
          <div>Previous page</div>
        )}
        <input type="text" />
        <button>Enter page number</button>
        {pageNumber !== pageAmount && pageAmount !== 0 ? (
          <button type="button" onClick={nextPage}>
            Next page
          </button>
        ) : (
          <div>Next page</div>
        )}
        {pageNumber !== pageAmount && pageAmount !== 0 ? (
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
