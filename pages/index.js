import Layout from "../components/layout";
import React, { useState, useEffect } from "react";
import Home from "../components/Home";

export default function Page({ placesData, listingData }) {
  const [session, setSession] = useState(null);

  return (
    <>
      {!session && (
        <div>
          <Home placesData={placesData} listingData={listingData} />
        </div>
      )}
    </>
  );
}

export async function getStaticProps() {
  const placesData = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  const listingData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );

  return {
    props: {
      placesData,
      listingData,
    },
  };
}
