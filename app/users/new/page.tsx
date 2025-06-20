"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NewUsers = () => {
  const router = useRouter();
  return (
    <>
      <button onClick={() => router.push("/users")} className="btn btn-primary">
        Create
      </button>
    </>
  );
};

export default NewUsers;
