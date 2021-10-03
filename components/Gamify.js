import React from "react";
import Image from "next/image";

function Gamify() {
  return (
    <div className="relative mt-3 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300">
      <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="hero-text block text-red-600 xl:inline">
              Hosts, Landlords & Property Managers
            </span>
          </h1>
          <p className="listitems mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl">
            All tenants are thoroughly Vetted
          </p>
          <p className="listitems mt-3 max-w-md mx-auto text-sm text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            We provide renters insurance on behalf of our tenants
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounsded-md shadow">
              <a
                href="me.com"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Rent to Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/heroimage.jpg"
            alt="hero-banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Gamify;
