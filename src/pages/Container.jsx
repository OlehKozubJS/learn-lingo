const Container = ({ NewComponent, innerContent }) => {
  return (
    <div>
      <NewComponent innerContent={"-"} />
      mire
    </div>
  );
};

export { Container };
