const Container = ({ NewComponent, innerContent }) => {
  return (
    <div>
      <NewComponent innerContent={innerContent} />
      mire
    </div>
  );
};

export { Container };
