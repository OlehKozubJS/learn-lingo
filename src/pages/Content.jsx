import css from "./AppTestPage.module.css";

const Content = ({ value }) => {
  return <div className={css.OptionItemButton}>{value}</div>;
};

export { Content };
