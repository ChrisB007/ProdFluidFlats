import { useState, useEffect } from "react";
import Head from "next/head";
import Gamify from "./Gamify";
import Hero from "./Hero";
import PlacesBlock from "./PlacesBlock";
import ListingBlock from "./ListingBlock";

export default function Home({ placesData, listingData }) {
  const [session, setSession] = useState(null);

  return (
    <>
      <Head>
        <title>fluidFlats</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="fluidflats desciption here" />
      </Head>
      <div>
        <>
          <div className="bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200">
            <Hero />
            <div className="flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200">
              <h2 className="mt-6 text-4xl section-header">Closest to you</h2>
            </div>
            <div className="placedt rounded-lg m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-4/5 relative bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200">
              {placesData?.map(({ img, location, distance, total }) => (
                <PlacesBlock
                  key={img}
                  img={img}
                  location={location}
                  distance={distance}
                  total={total}
                />
              ))}
            </div>
            <Gamify />
            <div className="flex items-center justify-center bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200">
              <h2 className="mt-6 text-4xl section-header">
                Fluid Rental Properties
              </h2>
            </div>
            <div className="grid m-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative bg-gradient-to-r from-gray-100 via-gray-300 to-gray-200 overflow-scroll scrollbar-hide p-3 -ml-3">
              {listingData?.map(({ title, img }) => (
                <ListingBlock key={img} title={title} img={img} />
              ))}
            </div>
          </div>
        </>
      </div>
    </>
  );
}
