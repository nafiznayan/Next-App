import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className="flex bg-slate-300 p-5">
      <Link href="/" className="mr-5">
        Next.Js
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
