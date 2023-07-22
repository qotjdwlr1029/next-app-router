export default function dynamicId({ params }) {
  const { id } = params;
  return <div>동적으로 생성한 라우트 아이디 {id} 입니다.</div>;
}
