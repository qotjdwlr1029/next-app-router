import Link from "next/link";

const idList = [
  { num: "1" },
  { num: "2" },
  { num: "3" },
  { num: "4" },
  { num: "5" },
  { num: "6" },
  { num: "7" },
  { num: "8" },
  { num: "9" },
];

export default function dynamicIdList() {
  return (
    <div>
      {idList.map((id, index) => {
        return (
          <div key={index}>
            <Link
              href={`/dynamic/${id.num}`}
            >{`${id.num}번 상세 페이지로 이동`}</Link>
          </div>
        );
      })}
    </div>
  );
}
