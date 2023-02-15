import { useState, Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import usePrevious from "../../hooks/usePrevious";

import Loading from "./Loading";
const Notifications = lazy(() => delayForDemo(import("./Notifications"), 2000));
const Settings = lazy(() => delayForDemo(import("./Settings"), 2000));
const Privacy = lazy(() => delayForDemo(import("./Privacy"), 2000));

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
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
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
        strokeWidth={2}
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
];
const UserMenuContent = ({ setIsUserMenuOpen }: any) => {
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
              className={`group relative -mr-1 flex flex-grow items-center justify-center gap-2 rounded-b-sm px-2 py-2 text-sm font-medium md:mr-0  md:rounded-b-3xl ${
                userMenuId === item.id
                  ? `z-[${100}] bg-gray-50 text-sky-700 shadow-lg`
                  : `z-[${
                      95 + item.id
                    }] bg-gray-200/50 text-gray-500 hover:bg-gray-200 hover:text-gray-800 dark:bg-gray-700   dark:text-gray-400 dark:hover:bg-gray-300 dark:hover:text-gray-800`
              }`}
              onClick={() => setUserMenuId(item.id)}
            >
              {userMenuId === item.id && (
                <motion.div
                  layoutId="underline"
                  className={`absolute top-0 left-0 h-1 w-full bg-sky-500`}
                ></motion.div>
              )}
              <div
                className={` ${
                  userMenuId === item.id
                    ? "text-sky-500"
                    : "text-gray-500 group-hover:text-gray-800 dark:text-gray-400"
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
            className="z-10 ml-0 h-10 w-10 justify-self-end bg-gray-200/50 p-2 text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:bg-gray-700/40 dark:hover:bg-gray-700 md:ml-0 md:rounded-b-3xl"
          >
            <span className="sr-only">Close menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
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
        className="my-8 h-full w-full overflow-y-auto px-8 pt-4 pb-32"
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
              duration: 0.3,
            }}
          >
            <Suspense fallback={<Loading />}>
              {userMenuId === 0 && <Notifications />}
              {userMenuId === 1 && <Settings />}
              {userMenuId === 2 && <Privacy />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default UserMenuContent;

type variantsProps = {
  direction: number;
  width: number;
};

let variants = {
  enter: ({ direction, width }: variantsProps) => ({
    x: direction * -width,
    opacity: 1,
  }),
  center: { x: 0, opacity: 1 },
  exit: ({ direction, width }: variantsProps) => ({
    x: direction * width,
    opacity: 1,
  }),
};

function delayForDemo(promise: any, ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  }).then(() => promise);
}
