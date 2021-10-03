import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-300 via-gray-100 to-gray-200">
      <main className="lg:relative">
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <Image
            className="absolute inset-0 w-full h-full object-cover"
            src="/images/apartment.jpg"
            alt="hero-banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline text-red-400">
                Fluid-Renting:
                <br />
              </span>
              <span className="hero-text block text-green-600 xl:inline">
                <span className="text-green-700">Freedom</span>{" "}
                <span className="text-green-700"> </span>
                <span className="text-pink-800">to rent and truly </span>live
                anywhere you wish
              </span>
            </h1>
            <ul className="listitems2">
              <li className="">Live here | Live there | Live anywhere</li>
              <li className="">
                Find an apartment within your budget and move in
              </li>
              <li className="">Month-to-Month lease</li>
              <li className="">Never make another security deposits</li>
              <li className="">
                Transfer your rent payments anywhere you want to live
              </li>
            </ul>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounsded-md shadow">
                <a
                  href="me.com"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  How It works
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
