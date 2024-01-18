import icons from "./icons.svg";
import styles from "./SVGImage.module.css";

const SVGImage = ({ name }) => {
  return (
    <svg className={styles.SVGImage}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export { SVGImage };
