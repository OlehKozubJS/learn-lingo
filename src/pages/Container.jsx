const Container = ({ children }) => {
  return (
    <div>
      {children}
      {children.props.mainValue}
      {children}
    </div>
  );
};

export { Container };
