import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { format, parse, formatDistanceToNow } from "date-fns";

const NavBar = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsUserMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    if (isUserMenuOpen) {
      document.body.classList.add("overflow-hidden");
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isUserMenuOpen]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    theme === "light"
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  }, [theme]);

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-gray-300/50 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                ) : (
                  <svg
                    className=" h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              {/* <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div> */}
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href="#"
                    //   className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80"
                    //   aria-current="page"
                  >
                    Home
                  </a>

                  <a
                    href="#calendar"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80"
                  >
                    Calendar
                  </a>

                  <a
                    href="#steps"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80"
                  >
                    Steps
                  </a>

                  <a
                    href="#chart"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80"
                  >
                    Chart
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={toggleTheme}
                type="button"
                className="group overflow-hidden rounded-full bg-gray-300 p-1 text-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 dark:bg-gray-700"
              >
                <span className="sr-only">Change theme</span>
                {theme === "light" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform-gpu transition-transform duration-300 ease-in-out group-hover:translate-y-[50%]"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    stroke-width={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                    <path
                      d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform-gpu transition-transform duration-300 ease-in-out group-hover:translate-y-[50%]"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    stroke-width={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
                      strokeWidth={0}
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </button>

              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <button
                    onClick={() => {
                      setIsUserMenuOpen((prev) => !prev);
                    }}
                    type="button"
                    className="flex rounded-full bg-gray-800 p-1 text-sm text-gray-400 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    //   ariaExpanded="false"
                    //   ariaHaspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      stroke-width={2}
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    </svg>
                  </button>
                </div>

                {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                {/* <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-1 overflow-hidden px-2 pt-2 pb-3"
              >
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80 "
                  //   aria-current="page"
                >
                  Home
                </a>

                <a
                  href="#calendar"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80"
                >
                  Calendar
                </a>

                <a
                  href="#steps"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80"
                >
                  Steps
                </a>

                <a
                  href="#chart"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white dark:text-gray-300/80"
                >
                  Chart
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      {/* <!-- user menu, show/hide based on menu state. --> */}
      <AnimatePresence>
        {isUserMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99] cursor-pointer bg-black/50"
              onClick={() => setIsUserMenuOpen(false)}
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "95%" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed bottom-0 left-1/2 z-[100] w-full -translate-x-[50%] rounded-t-lg bg-gray-300 shadow-xl ring-1 ring-gray-900/5 dark:bg-gray-800 md:w-8/12"
              id="user-menu"
            >
              <UserMenuContent setIsUserMenuOpen={setIsUserMenuOpen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;

const userMenus = [
  {
    id: 0,
    name: "Notifications",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
        <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
      </svg>
    ),
  },
  {
    id: 1,
    name: "Settings",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        stroke-width={2}
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Privacy",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
        <path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        <path d="M12 12l0 2.5"></path>
      </svg>
    ),
  },
  //   {
  //     id: 3,
  //     name: "Log out",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-6 w-6"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         stroke-width="2"
  //         stroke="currentColor"
  //         fill="none"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //       >
  //         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  //         <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
  //         <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
  //       </svg>
  //     ),
  //   },
  //   {
  //     id: 4,
  //     name: "Log in",
  //     icon: (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-6 w-6"
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         stroke-width="2"
  //         stroke="currentColor"
  //         fill="none"
  //         stroke-linecap="round"
  //         stroke-linejoin="round"
  //       >
  //         <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  //         <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
  //         <path d="M20 12h-13l3 -3m0 6l-3 -3"></path>
  //       </svg>
  //     ),
  //   },
];

const userInfo = {
  name: "John Doe",
  email: "jonhDoe123@mailservice.com",
  avatar: "https://i.pravatar.cc/150?img=32",
};
const notifications = [
  {
    id: 1,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "13-2-2023",
    read: true,
  },
  {
    id: 2,
    title: "New message from Jane Dorsey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "5-2-2023",
    read: false,
  },
  {
    id: 3,
    title: "New message from Jack Sparrow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "1-1-2023",
    read: true,
  },
];

const UserMenuContent = ({ setIsUserMenuOpen }: any) => {
  //   const [loggedIn, setLoggedIn] = useState(false);
  const [userMenuId, setUserMenuId] = useState(0);
  const [ref, { width }] = useMeasure();
  let previous = usePrevious(userMenuId);
  let direction =
    previous === undefined || previous === null || previous < userMenuId
      ? -1
      : 1;

  return (
    <>
      {/* pagination */}
      <div className="flex w-full max-w-full justify-start">
        <div className="flex flex-auto flex-row gap-0 md:mx-8 md:gap-2">
          {userMenus.map((item) => (
            <motion.button
              animate={{ width: userMenuId === item.id ? "30%" : "20%" }}
              key={item.id}
              className={`group relative -mr-1 flex flex-grow items-center justify-center gap-2 rounded-b-3xl px-2 py-2 text-sm font-medium hover:text-gray-800 md:mr-0 ${
                userMenuId === item.id
                  ? `z-[${100}] bg-gray-50 text-indigo-700 shadow-lg`
                  : `z-[${
                      99 - item.id
                    }] bg-gray-200/50 text-gray-500 hover:bg-gray-200 dark:bg-gray-700/80 dark:text-gray-400 dark:hover:bg-gray-300`
              }`}
              onClick={() => setUserMenuId(item.id)}
            >
              {userMenuId === item.id && (
                <motion.div
                  layoutId="underline"
                  className={`absolute top-0 left-0 h-1 w-full bg-indigo-500`}
                ></motion.div>
              )}
              <div
                className={`group-hover:text-gray-800 ${
                  userMenuId === item.id
                    ? "text-indigo-500"
                    : "text-gray-500 dark:text-gray-400 "
                }`}
                aria-hidden="true"
              >
                {item.icon}
              </div>

              {item.name}
            </motion.button>
          ))}
          <button
            onClick={() => setIsUserMenuOpen(false)}
            className="z-10 ml-1 h-10 w-10 justify-self-end rounded-b-3xl bg-gray-200/50 p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:bg-gray-700/40 dark:hover:bg-gray-700 md:ml-0"
            // className="absolute top-0 right-0 z-10 h-10 w-10 rounded-md rounded-bl-3xl p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              stroke-width={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* content */}
      <div
        ref={ref}
        className="mt-8 h-full w-full space-y-1 overflow-y-auto px-8 pb-3"
      >
        {/* show the menu that is selected in the state */}
        <AnimatePresence exitBeforeEnter custom={{ direction, width }}>
          <motion.div
            key={userMenuId}
            custom={{ direction, width }}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { duration: 0.3 },
              opacity: { duration: 0.1 },
            }}
          >
            {userMenuId === 0 && (
              <div className="flex flex-col gap-2 overflow-hidden md:px-16">
                {notifications.map((item, index) => (
                  <motion.li
                    key={item.id + Math.random() * 100}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      opacity: { duration: 0.1 },
                      delay: 0.2 + 0.13 * index,
                    }}
                    className="flex flex-row items-center justify-between gap-2"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-gray-300">
                        {item.read ? "✔" : "✖"}
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="text-sm font-medium text-gray-700">
                          {item.title}
                        </div>
                        <div className="break-words text-xs font-normal text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="flex basis-3/12 flex-row items-center justify-end gap-2">
                      <div className="text-xs font-normal text-gray-500">
                        {formatDistanceToNow(
                          new Date(
                            parseInt(item.date.split("-")[2]),
                            parseInt(item.date.split("-")[1]) - 1,
                            parseInt(item.date.split("-")[0])
                          ),
                          {
                            addSuffix: true,
                          }
                        )}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </div>
            )}
            {userMenuId === 1 && <div className="flex flex-col gap-2"></div>}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

type variantsProps = {
  direction: number;
  width: number;
};

let variants = {
  enter: ({ direction, width }: variantsProps) => ({
    x: direction * width,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: ({ direction, width }: variantsProps) => ({
    x: direction * -width,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

function usePrevious(state: any) {
  let [tuple, setTuple] = useState([null, state]);

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }
  return tuple[0];
}
