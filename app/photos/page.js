import Image from "next/image";
import Link from "next/link";

async function getPhotoList() {
  const header = { "Content-Type": "application/json" };
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1",
    { headers: header }
  );
  const data = await res.json();
  return data;
}

export default async function PhotoPage() {
  const photos = await getPhotoList();

  return (
    <div>
      <h1>This is Photo Page</h1>
      <div className="flex flex-row flex-wrap">
        {photos.map((photo, index) => {
          return (
            <div
              key={photo.id}
              className="border-emerald-800 border-2 rounded-lg px-4 py-4 mx-4 my-4
                w-48 flex flex-col justify-between
              "
            >
              <div className="font-semibold">{photo.title}</div>
              <Link href={`/photo/${photo.id}`}>
                <Image
                  className="pt-4"
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
