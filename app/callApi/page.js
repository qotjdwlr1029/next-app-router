import Link from "next/link";

async function a() {
  let a = [];
  await fetch(`http://localhost:3000/api`)
    .then((res) => res.json())
    .then((data) => (a = data.message));
  return a;
}

const CallApiPage = async () => {
  const list = await a();

  const paramArr = ["20230710", "20230709", "20230708"];
  return (
    <div>
      <div>this is callApiPage</div>
      {paramArr.map((v, i) => {
        return (
          <div key={i}>
            <Link href={`/callApi/${v}`}>{v} 구매 목록</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CallApiPage;
