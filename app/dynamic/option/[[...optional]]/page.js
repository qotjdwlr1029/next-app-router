export default function RootOptionalCatchPage({ params }) {
  const { optional: segment } = params;
  return (
    <div>
      <h1>이곳은 optional catch 페이지 입니다.</h1>
      {!!segment &&
        segment.map((seg, index) => {
          return <div key={index}>{seg}</div>;
        })}
    </div>
  );
}
