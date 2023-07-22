async function errorFunction() {
  // const url = 'http://localhost:3000/error';
  // const url = "http://localhost:3000/test";
  const url = "http://localhost:3000/api";

  try {
    const res = await fetch(url, {
      // headers: { "Content-type": "text/plain" },
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      // const data = await res.text();
      const data = await res.json();
      // if (data.indexOf("error") > -1) {
      //   throw new Error(" 에러 주소를 요청하셨습니다. ");
      // }
      console.log(data);
      return data;
    }
  } catch (err) {
    throw new Error(err);
  }
}

export default async function AboutPage() {
  // const res = await errorFunction();

  return (
    <div>
      <h1>This is About Page</h1>
      {/* <div>{JSON.stringify(res)}</div> */}
    </div>
  );
}
