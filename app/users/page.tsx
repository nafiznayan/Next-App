// import React from "react";
// import Link from "next/link";
// import UserTable from "./UserTable";

// interface Props {
//   searchParams: { sortOrder: string };
// }

// const UsersPage = async ({ searchParams }: Props) => {
//   const sortOrder = searchParams?.sortOrder || "asc"; // default if not provided
//   return (
//     <>
//       <h1>Users</h1>
//       <Link href="/users/new" className="btn">
//         New User
//       </Link>
//       <UserTable sortOrder={sortOrder} />
//     </>
//   );
// };

// export default UsersPage;
import React from "react";
import Link from "next/link";
import UserTable from "./UserTable";

interface Props {
  searchParams: Promise<{ sortOrder: string }>;
}

const UsersPage = async ({ searchParams }: Props) => {
  const sortOrder = searchParams.then((p) => p?.sortOrder || "asc");

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
