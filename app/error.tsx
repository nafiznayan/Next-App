"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void; //give user a chance to retry
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);

  return (
    <>
      <div>An unexpected Error has Occurred</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};

export default ErrorPage;
