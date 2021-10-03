import React from "react";

export default function PlacesBlock({ img, location, distance, total }) {
  return (
    <div className="flex items-center justify-center mt-6 mb-32 cursor-pointer hover:scale-105 transition-transform duration-300 ease-out">
      <li className="list-none px-3" key={img}>
        <div className="relative w-60 h-60 space-y-2 ">
          <img
            className="mx-auto w-60 h-60 rounded-lg"
            src={img}
            alt="listing-image"
          />
          <div className="space-y-2">
            <div className="text-lg flex flex-col justify-center leading-6 font-medium space-y-1">
              <h3 className="text-center">{location}</h3>
              <p className="text-sm text-center">{distance}</p>
              <p className="text-sm text-center">{total}</p>
              <button
                type="button"
                className="inline-flex justify-center items-center px-4 py-2 border border-transparent mt-0.5 rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                View details
              </button>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
