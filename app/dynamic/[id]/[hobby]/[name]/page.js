export default function DynamicIdHobbyName({ params }) {
  const { id, hobby, name } = params;
  return (
    <div>
      {id}번 {name} 학생의 취미는 {hobby}입니다.
    </div>
  );
}
