const Container = ({ children }) => {
  return (
    <div>
      {children}
      {children.props.mainValue}
    </div>
  );
};

export { Container };
