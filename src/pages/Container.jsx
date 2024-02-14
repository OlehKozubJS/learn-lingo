const Container = ({ NewComponent, innerContent }) => {
  return (
    <div>
      <NewComponent innerContent={"-"} />
      World!
    </div>
  );
};

export { Container };
