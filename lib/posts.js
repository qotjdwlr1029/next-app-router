import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getFileNames() {
  const fileList = fs.readdirSync(postsDirectory);
  const fileNames = fileList.map((fileName, index) => {
    return fileName.replace(/\.md/g, "");
  });
  return fileNames;
}

export async function readFile(fileName) {
  const file = fileName + ".md";
  const fileContent = fs.readFileSync(path.join(postsDirectory, file), {
    encoding: "utf-8",
  });

  const {
    content,
    data: { title },
  } = matter(fileContent);

  const processContent = await remark().use(html).process(content);
  const processHtml = processContent.toString();

  return {
    processHtml,
    title,
  };
}
