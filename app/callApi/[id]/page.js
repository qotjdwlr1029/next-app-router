async function requestDynamicApi(id) {
  const res = await fetch(`http://localhost:3000/api/${id}?date=${id}`);

  if (!res.ok) {
    throw new Error(" no data found ");
  }
  const data = await res.json();
  console.log(data);
  return data.message;
}

export default async function DynamicApiCall({ params }) {
  const { id } = params;
  const list = await requestDynamicApi(id);

  return (
    <div className="rounded bg-green-200 p-4">
      <div className="flex flex-row justify-center items-center bg-green-500 rounded">
        <div className="my-4">{id} 구매 목록</div>
      </div>
      <div className="rounded bg-green-600 my-4 p-7">
        <div className="flex flex-row justify-around items-center mb-4 bg-green-900">
          <span>장소</span>
          <span>품목</span>
          <span>금액</span>
        </div>
        {list.length ? (
          list.map((v, i) => {
            return (
              <div className="flex flex-row justify-around items-center">
                <span>{v.place}</span>
                <span>{v.product}</span>
                <span>{v.price}</span>
              </div>
            );
          })
        ) : (
          <div>구매한 품목이 없습니다.</div>
        )}
      </div>
    </div>
  );
}
