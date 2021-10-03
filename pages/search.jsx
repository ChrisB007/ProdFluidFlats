import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import AptInfoCard from "../components/AptInfoCard";
import Map from "../components/Map";

function Search({ getData }) {
  const router = useRouter();
  const { location, startDate, endDate, numGuest } = router.query;
  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="">
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="mt-8 mb-6">
            200+ rentals {range} for {numGuest} tenants
          </p>
          <h1 className="text-3xl font-semibold mt-8 mb-8">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="px-2 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">
              Cancellation Flexibility
            </p>
            <p className="px-2 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">
              Cancellation Flexibility
            </p>
            <p className="px-2 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">
              Cancellation Flexibility
            </p>
            <p className="px-2 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition-transform duration-100 ease-out">
              Cancellation Flexibility
            </p>
          </div>
          <div className="flex flex-col">
            {getData.map((data) => (
              <AptInfoCard
                key={data.img}
                img={data.img}
                title={data.title}
                location={data.location}
                price={data.price}
                description={data.description}
                total={data.total}
                star={data.star}
              />
            ))}
          </div>
        </section>
        {/* Map */}
        <section className="hidden xl:inline-flex xl:min-w-[600px] ">
          <Map getData={getData} />
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const getData = await fetch("https://links.papareact.com/isz").then((res) =>
    res.json()
  );

  return {
    props: {
      getData,
    },
  };
}
export default Search;
