"use client";
import React from "react";

const AddToCard = () => {
  return (
    <div>
      <button
        className="btn btn-primary py-5 text-lg"
        onClick={() => console.log("Click")}
      >
        Add To Card
      </button>
    </div>
  );
};

export default AddToCard;
