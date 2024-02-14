const Container = ({ NewComponent, innerContent, children }) => {
  return (
    <div>
      <NewComponent innerContent={","} />
      World!
    </div>
  );
};

export { Container };
