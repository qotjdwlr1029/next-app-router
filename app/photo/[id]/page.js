import { jsonHeader } from "~/component/util/util";
import Image from "next/image";

async function getPhotoInfo(checkId) {
  const id = Number.parseInt(checkId || "1");

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
    jsonHeader
  );
  const data = res.json();

  return data;
}

export default async function InterceptPhotoPage({ params }) {
  const { id } = params;
  const photo = await getPhotoInfo(id);

  return (
    <div className="flex flex-col justify-between">
      <div className="font-semibold text-2xl py-4">{photo.title}</div>
      <Image src={photo.url} alt={photo.title} width={600} height={600} />
    </div>
  );
}
