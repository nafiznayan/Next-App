// import React from "react";
// import { sort } from "fast-sort";
// import Link from "next/link";
// //Typescript to set users as User type
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
// interface UserTableProps {
//   sortOrder?: string; // optional in case no sort param is passed
// }
// const UserTable = async ({ sortOrder }: UserTableProps) => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let users: User[] = await res.json();
//   if (sortOrder == "name") {
//     users = sort(users).asc((u) => u.name);
//   } else if (sortOrder == "email") {
//     users = sort(users).asc((u) => u.email);
//   }
//   return (
//     <table className="table table-zebra table-bordered">
//       <thead>
//         <tr>
//           <th>
//             <Link rel="stylesheet" href="/users/?sortOrder=name">
//               Name
//             </Link>
//           </th>
//           <th>
//             <Link rel="stylesheet" href="/users/?sortOrder=email">
//               Email
//             </Link>
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;
import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

// TypeScript type for User
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserTableProps {
  sortOrder?: Promise<string | undefined>; // sortOrder as a Promise
}

const UserTable = async ({ sortOrder }: UserTableProps) => {
  const resolvedSortOrder = await sortOrder;

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users: User[] = await res.json();

  if (resolvedSortOrder === "name") {
    users = sort(users).asc((u) => u.name);
  } else if (resolvedSortOrder === "email") {
    users = sort(users).asc((u) => u.email);
  }

  return (
    <table className="table table-zebra table-bordered">
      <thead>
        <tr>
          <th>
            <Link href="/users/?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users/?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
