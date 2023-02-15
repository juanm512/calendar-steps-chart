const Privacy = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-8 divide-y md:w-10/12 md:px-16">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Account plan
          </div>
          <div className="text-sm text-gray-500">
            You can set up your billing information here and your account plan.
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 divide-gray-500">
          {/*
          <div className="flex flex-col justify-between pt-2">
            <div className="flex flex-col gap-0.5">
               <div className="text-base font-semibold text-gray-600 dark:text-gray-400">
                Payment details
              </div> 
              <div className="text-xs text-gray-500">
                Get Themesberg news, announcements, and product updates
              </div>
            </div>
              */}
          <div className="my-4 flex flex-col items-center justify-between divide-y rounded-md border">
            <label
              htmlFor="plan-free"
              className="flex w-full cursor-pointer select-none flex-row justify-between rounded-t-md p-4"
            >
              <div className="flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  id="plan-free"
                  className="h-3 w-3 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <div className="relative flex items-center text-base font-semibold first-letter:uppercase">
                  Free
                </div>
              </div>
              <div className="flex flex-row items-end justify-center">
                <p>
                  <span className="text-sm font-bold">$ 00 / mo</span>
                  <span className="font-ligth text-xs">
                    {" ("}$ free ever{")"}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-end text-xs">
                Up to 1 post per day
              </div>
            </label>
            <label
              htmlFor="plan-startup"
              className="flex w-full cursor-pointer select-none flex-row justify-between  p-4"
            >
              <div className="flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  id="plan-startup"
                  className="h-3 w-3 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <div className="relative flex items-center text-base font-semibold first-letter:uppercase">
                  Startup
                </div>
              </div>
              <div className="flex flex-row items-end justify-center">
                <p>
                  <span className="text-sm font-bold">$ 29 / mo</span>
                  <span className="font-ligth text-xs">
                    {" ("}$ 290/yr{")"}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-end text-xs">
                Up to 5 post per day
              </div>
            </label>
            <label
              htmlFor="plan-business"
              className="flex w-full cursor-pointer select-none flex-row justify-between  p-4"
            >
              <div className="flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  id="plan-business"
                  className="h-3 w-3 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <p className="relative flex items-center text-base font-semibold first-letter:uppercase">
                  Business
                </p>
              </div>
              <div className="flex flex-row items-end justify-center">
                <p>
                  <span className="text-sm font-bold">$ 99 / mo</span>
                  <span className="font-ligth text-xs">
                    {" ("}$ 990/yr{")"}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-end text-xs">
                Up to 25 post per day
              </div>
            </label>
            <label
              htmlFor="plan-enterprise"
              className="flex w-full cursor-pointer select-none flex-row justify-between rounded-b-md p-4"
            >
              <div className="flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  id="plan-enterprise"
                  className="h-3 w-3 border-gray-300 text-sky-600 focus:ring-sky-500"
                />
                <div className="relative flex items-center text-base font-semibold first-letter:uppercase">
                  Enterprise
                </div>
              </div>
              <div className="flex flex-row items-end justify-center">
                <p>
                  <span className="text-sm font-bold">$ 249 / mo</span>
                  <span className="font-ligth text-xs">
                    {" ("}$ 2490/yr{")"}
                  </span>
                </p>
              </div>
              <div className="flex items-center justify-end text-xs">
                Up to 50 post per day
              </div>
            </label>
          </div>
          <div className="flex flex-row">
            <button className="rounded-md bg-sky-600 px-4 py-2 text-white">
              Save plan
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-8">
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Billing History
          </div>
          <div className="text-sm text-gray-500">
            You can set up Themesberg to get notifications
          </div>
        </div>
        <div className="flex flex-col gap-4 divide-y divide-gray-500 ">
          <div className="flex flex-row justify-between pt-2">
            <div className="flex flex-col gap-0.5">
              <div className="text-base font-semibold text-gray-600 dark:text-gray-400">
                Company News
              </div>
              <div className="text-xs text-gray-500">
                Get Themesberg news, announcements, and product updates
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <label className="relative flex cursor-pointer items-center">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="block h-8 w-14 rounded-full bg-gray-600"></div>
                  </div>
                  <div className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 pt-8">
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold text-gray-700 dark:text-gray-300">
            Payment details
          </div>
          <div className="text-sm text-gray-500">
            You can set up Themesberg to get notifications
          </div>
        </div>
        <div className="flex flex-col gap-4 divide-y divide-gray-500 ">
          <div className="flex flex-row justify-between pt-2">
            <div className="flex flex-col gap-0.5">
              <div className="text-base font-semibold text-gray-600 dark:text-gray-400">
                Company News
              </div>
              <div className="text-xs text-gray-500">
                Get Themesberg news, announcements, and product updates
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <label className="relative flex cursor-pointer items-center">
                  <div className="relative">
                    <input type="checkbox" className="sr-only" />
                    <div className="block h-8 w-14 rounded-full bg-gray-600"></div>
                  </div>
                  <div className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Privacy;
