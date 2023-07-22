import { readFile } from "~/lib/posts";

const GrayMatterPage = async ({ params }) => {
  const fileName = params.fileName;
  const { processHtml, title } = await readFile(fileName);
  const a = { __html: processHtml };
  return (
    <div>
      <h1>{fileName}.md</h1>
      <div>gray matter로 불러온 제목과 내용입니다.</div>
      <div>제목 : {title}</div>
      <div dangerouslySetInnerHTML={a} />
    </div>
  );
};

export default GrayMatterPage;
