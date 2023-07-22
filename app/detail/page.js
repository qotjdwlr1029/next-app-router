import SkeletonText from "~/component/skeleton/SkeletonText";
import styles from "./detail.module.css";
import Link from "next/link";
import { delay } from "~/component/util/util";

async function getData() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=1`
  );
  const data = await res.json();
  await delay(4000);

  return data;
}

export default async function Home() {
  let data = await getData();

  return (
    <div>
      <h1>This is Detail Page</h1>
      <div className={styles.dataArea}>
        {data &&
          data.map((post, idx) => {
            return (
              <div key={idx} className={styles.content}>
                <h3 className={styles.title}>{post.title}</h3>
                <div className={styles.body}>{post.body}</div>
                <Link href={`/detail/1/${post.id}`}>View Detail</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
