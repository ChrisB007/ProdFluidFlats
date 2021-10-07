import { Fragment, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import Header from "./header";

const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  image:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Calendar", href: "#", current: false },
  { name: "Teams", href: "#", current: false },
  { name: "Directory", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const [numGuest, setNumGuest] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const [session, setSession] = useState(null);

  const handleSelect = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleChange = (e) => setSearchInput(e.target.value);
  const handleNumGuest = (e) => setNumGuest(e.target.value);
  const resetButton = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const search = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numGuest,
      },
    });
    resetButton();
  };

  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classNames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white  shadow-md lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                {/* Left Column - Logo */}
                <div className="first-col w-4/12 flex md:relative md:w-full lg:w-full xl:w-full 2xl:w-full md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                  <div className="flex lg:flex lg:items-center justify-start item-center lg:w-0 lg:flex-1">
                    <a href={session ? "/dashboard" : "/"}>
                      <span className="sr-only">fluidFlats</span>
                      <img
                        className="logo object-cover m-auto p-6 "
                        src="/images/logo.png"
                      />
                    </a>
                  </div>
                </div>

                {/* Middle column - Search */}
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="search-parent flex justify-center items-center px-6 py-4 md:w-9/12 md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="search-div w-9/12 flex justify-center m-auto relative">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="search-input m-auto relative flex item-center justify-end">
                        <input
                          id="search"
                          name="search"
                          className="search-box m-auto block w-11/12 md:w-9/12 bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
                          placeholder="Search rental"
                          type="search"
                          value={searchInput}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="searchDate">
                        {searchInput && (
                          <div className="flex flex-col col-span-3 mx-auto mt-4">
                            <DateRangePicker
                              ranges={[selectionRange]}
                              minDate={new Date()}
                              onChange={handleSelect}
                              rangeColors={["#9BA3AF"]}
                              onChange={handleSelect}
                            />
                            <div className="flex items-center border-b mb-7 ">
                              <h2 className="text-2xl flex-grow font-semibold">
                                Number of Tenants:{" "}
                              </h2>
                              <UserGroupIcon className="h-8" />
                              <input
                                value={numGuest}
                                min={1}
                                type="number"
                                className="w-12 pl-2 outline-none text-lg"
                                onChange={handleNumGuest}
                              />
                            </div>
                            <div className="flex">
                              <button
                                onClick={resetButton}
                                className="flex-grow"
                              >
                                Cancel
                              </button>
                              <button onClick={search} className="flex-grow">
                                Search
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right column - Nav */}

                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  {/* Profile dropdown */}
                  <Menu as="div" className="flex-shrink-0 relative ml-5">
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <span className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <Header />
                  </span>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-100 text-gray-900"
                        : "hover:bg-gray-50",
                      "block rounded-md py-2 px-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user?.image}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user?.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
