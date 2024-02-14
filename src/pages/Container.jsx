const Container = ({ children }) => {
  const NewComponent = children;

  return (
    <div>
      {children}
      {children.props.mainValue}
    </div>
  );
};

export { Container };
