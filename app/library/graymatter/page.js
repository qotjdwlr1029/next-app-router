import { getFileNames } from "~/lib/posts";
import Link from "next/link";

const GrayMatter = () => {
  const fileList = getFileNames();
  return (
    <div>
      <div>Use gray Matter Library</div>
      <ul>
        {fileList.map((filename, index) => {
          return (
            <li key={index}>
              <Link href={`/library/graymatter/${filename}`}>{filename}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GrayMatter;
