import React from "react";

function ListingBlock({ title, img }) {
  return (
    <div className="properties px-3 flex items-center justify-center mt-6 mb-32 cursor-pointer hover:scale-105 transition-transform duration-200 ease-out">
      <div className=" relative h-80 w-96">
        <img className="mx-auto rounded-lg" src={img} layout="fill" />
        <h3 className="text-center">{title}</h3>
      </div>
    </div>
  );
}

export default ListingBlock;
