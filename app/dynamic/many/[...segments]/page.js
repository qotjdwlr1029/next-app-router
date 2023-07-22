export default function ManySegments({ params }) {
  const { segments } = params;

  return (
    <div>
      {typeof segments}
      <br />
      {segments.map((segment, index) => {
        return <span id={index}>{segment} </span>;
      })}
    </div>
  );
}
