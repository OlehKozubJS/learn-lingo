const Container = ({ NewComponent, innerContent, children }) => {
  return (
    <div>
      <NewComponent innerContent={","} />
      World!
      {children}
      {children.props.value}
    </div>
  );
};

export { Container };
