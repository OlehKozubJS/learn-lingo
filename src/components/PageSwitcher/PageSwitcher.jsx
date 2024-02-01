import { useEffect, useState } from "react";

import styles from "./PageSwitcher.module.css";

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

  const handleNewPageChange = (event) => {
    const newNumber = event.target.value;
    setNewPageNumber(newNumber);
  };

  const handleNewPageEnter = () => {
    if (
      Number(newPageNumber).toString() === "NaN" ||
      newPageNumber < 1 ||
      newPageNumber > pageAmount
    ) {
      setNewPageNumber(pageNumber);
    } else {
      setPageNumber(Number(newPageNumber));
    }
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    setNewPageNumber(pageNumber + 1);
  };

  const lastPage = () => {
    setPageNumber(pageAmount);
    setNewPageNumber(pageAmount);
  };

  useEffect(() => {
    setPageNumber(1);
    setNewPageNumber(1);
    setPageAmount(Math.ceil(list.length / perPage));
  }, [list]);

  useEffect(() => {
    onChange(list.slice((pageNumber - 1) * perPage, pageNumber * perPage));
  }, [pageNumber, list]);

  useEffect(() => {
    setNewPageNumber(pageNumber);
  }, [pageNumber]);

  return (
    <div>
      <div className={styles.PageSwitcherButtons}>
        {pageNumber !== 1 && pageAmount !== 0 ? (
          <button
            type="button"
            onClick={firstPage}
            className={styles.PageSwitcherButton}
          >
            First page
          </button>
        ) : (
          <div className={styles.PageSwitcherDiv}>First page</div>
        )}
        {pageNumber !== 1 && pageAmount !== 0 ? (
          <button
            type="button"
            onClick={previousPage}
            className={styles.PageSwitcherButton}
          >
            Previous page
          </button>
        ) : (
          <div className={styles.PageSwitcherDiv}>Previous page</div>
        )}
        {newPageNumber === NaN ? (
          <div className={styles.PageSwitcherInput}>{pageNumber}</div>
        ) : (
          <input
            type="text"
            onChange={handleNewPageChange}
            value={newPageNumber}
            className={styles.PageSwitcherInput}
          />
        )}
        <button
          type="button"
          onClick={handleNewPageEnter}
          className={styles.PageSwitcherButton}
        >
          Enter page number
        </button>
        {pageNumber !== pageAmount && pageAmount !== 0 ? (
          <button
            type="button"
            onClick={nextPage}
            className={styles.PageSwitcherButton}
          >
            Next page
          </button>
        ) : (
          <div className={styles.PageSwitcherDiv}>Next page</div>
        )}
        {pageNumber !== pageAmount && pageAmount !== 0 ? (
          <button
            type="button"
            onClick={lastPage}
            className={styles.PageSwitcherButton}
          >
            Last page
          </button>
        ) : (
          <div className={styles.PageSwitcherDiv}>Last page</div>
        )}
      </div>
      <p>
        Page {pageNumber}/{pageAmount}
      </p>
    </div>
  );
};

export { PageSwitcher };
