import { delay } from "~/component/util/util";

async function getUserList() {
  const header = { "Content-Type": "application/json" };
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    headers: header,
  });
  const data = await res.json();
  await delay(4000);
  return data;
}

export default async function UserListPage() {
  const users = await getUserList();

  return (
    <div className="px-2 py-2">
      {users.map((user, index) => {
        return (
          <div
            className="border-black border-2 rounded-lg py-3 px-5 mx-auto my-4 w-5/6"
            key={index}
          >
            <div className="flex flex-row items-end mb-3">
              <div className="text-3xl font-bold">{user.name}</div>
              <div className="mx-5">( {user.username} )</div>
            </div>
            <div className="rounded-lg bg-[#fffff0] border-gray-400 border-2 px-4 py-4">
              <div className="text-xl">Contact</div>
              <div>
                address : {user.address.street} {user.address.city}
              </div>
              <div>
                email : {user.email}
                <br />
                phone : {user.phone}
                <br />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
