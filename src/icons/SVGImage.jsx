import icons from "./icons.svg";

const SVGImage = ({ name, size }) => {
  return (
    <svg style={{ width: `${size}px`, height: `${size}px` }}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
};

export { SVGImage };
