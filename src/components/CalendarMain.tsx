import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  format,
  parse,
  startOfToday,
  add,
  getDay,
  eachDayOfInterval,
  endOfMonth,
  startOfMonth,
  isToday,
} from "date-fns";

export default function CalendarMain() {
  let today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), "MMMM-yyyy")
  );
  let firstDayCurrentMonth = startOfMonth(
    parse(selectedMonth, "MMMM-yyyy", new Date())
  );
  //   console.log("firstDayCurrentMonth", firstDayCurrentMonth);

  type day = {
    date: Date | number;
    isCurrentMonth: boolean;
    isPrevMonth: boolean;
    isNextMonth: boolean;
    isToday: boolean;
  };

  const [days, setDays] = useState<day[]>([]);

  useEffect(() => {
    let lastDayCurrentMonth = endOfMonth(firstDayCurrentMonth);

    const startDayInterval = add(firstDayCurrentMonth, {
      days: -getDay(firstDayCurrentMonth),
    });
    const endDayInterval = add(lastDayCurrentMonth, {
      days: 6 - getDay(lastDayCurrentMonth),
    });

    let daysInterval = eachDayOfInterval({
      start: startDayInterval,
      end: endDayInterval,
    });

    // console.log("days", daysInterval);

    const daysArray = daysInterval.map((day) => {
      let isCurrentMonth =
        format(day, "MMMM-yyyy") === format(firstDayCurrentMonth, "MMMM-yyyy");
      let isPrevMonth =
        format(day, "MMMM-yyyy") ===
        format(add(firstDayCurrentMonth, { months: -1 }), "MMMM-yyyy");
      let isNextMonth =
        format(day, "MMMM-yyyy") ===
        format(add(firstDayCurrentMonth, { months: 1 }), "MMMM-yyyy");
      return {
        date: day,
        isCurrentMonth,
        isPrevMonth,
        isNextMonth,
        isToday: isToday(day),
      };
    });

    console.log("daysWithDate", daysArray);
    setDays(daysArray);
  }, [selectedMonth]);

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setSelectedMonth(format(firstDayNextMonth, "MMMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setSelectedMonth(format(firstDayNextMonth, "MMMM-yyyy"));
  }

  return (
    // dark:bg-neutral-800
    <div className="relative w-full bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5  sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10 lg:max-w-4xl">
      <div className="mx-auto w-full max-w-xl lg:max-w-4xl">
        <div className="divide-y divide-gray-300/50">
          <div className="flex justify-center space-y-6 pb-8 text-base leading-7 text-gray-600">
            <div className=" grid w-full grid-cols-3 justify-items-center md:w-8/12 ">
              <button
                onClick={previousMonth}
                className="flex aspect-square h-8 items-center overflow-hidden rounded-full p-1 hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square h-8"
                  viewBox="0 0 24 24"
                  stroke-width={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z"></path>
                </svg>
              </button>
              <div className="flex h-8 items-center overflow-hidden">
                <p className="text-base font-medium text-gray-600">
                  {selectedMonth}
                </p>
              </div>
              <button
                onClick={nextMonth}
                className="flex aspect-square h-8 items-center overflow-hidden rounded-full p-1 hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square h-8"
                  viewBox="0 0 24 24"
                  stroke-width={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 7h-6l4 5l-4 5h6l4 -5z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="grid w-full grid-cols-7 md:w-8/12">
                <p className="text-center text-sm font-normal text-gray-600 sm:after:content-['on']">
                  M
                </p>
                <p className="text-center text-sm font-normal text-gray-600 sm:after:content-['ue']">
                  T
                </p>
                <p className="text-center text-sm font-normal text-gray-600 sm:after:content-['ed']">
                  W
                </p>
                <p className="text-center text-sm font-normal text-gray-600 sm:after:content-['hu']">
                  T
                </p>
                <p className="text-center text-sm font-normal text-gray-600 sm:after:content-['ri']">
                  F
                </p>
                <p className="text-center text-sm font-normal text-gray-600 sm:after:content-['at']">
                  S
                </p>
                <p className="text-center text-sm font-normal text-gray-600 sm:after:content-['un']">
                  S
                </p>
              </div>
              <div className="grid w-full grid-cols-7 rounded-lg border shadow-sm md:w-8/12">
                {days &&
                  days.map((day) => {
                    return (
                      <Day
                        key={day.date.toString()}
                        date={day.date}
                        isCurrentMonth={day.isCurrentMonth}
                        isPrevMonth={day.isPrevMonth}
                        isNextMonth={day.isNextMonth}
                        isToday={day.isToday}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                      />
                      //   <div
                      //     key={day.date.toString()}
                      //     className="flex aspect-square h-full items-center justify-center"
                      //   >
                      //     <button
                      //       className={
                      //         "flex aspect-square h-8 items-center justify-center rounded-full text-lg font-semibold " +
                      //         (day.isToday
                      //           ? " bg-gray-900 text-sky-600 hover:bg-gray-500 hover:text-gray-100"
                      //           : "text-gray-600 hover:bg-gray-500 hover:text-gray-100")
                      //       }
                      //     >
                      //       {format(day.date, "d")}
                      //     </button>
                      //   </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="space-y-6 pt-8 text-base leading-7 text-gray-600">
            <div className="flex flex-row items-center justify-center">
              <button className="flex basis-full flex-row items-center justify-center gap-2 rounded-md border-2 bg-gray-200 px-4 py-2 hover:border-gray-500 sm:basis-6/12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block aspect-square h-6"
                  viewBox="0 0 24 24"
                  stroke-width={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M16 3l0 4"></path>
                  <path d="M8 3l0 4"></path>
                  <path d="M4 11l16 0"></path>
                  <path d="M10 16l4 0"></path>
                  <path d="M12 14l0 4"></path>
                </svg>
                Add Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Day = ({
  key,
  date,
  isCurrentMonth,
  isPrevMonth,
  isNextMonth,
  isToday,
  selectedDate,
  setSelectedDate,
}: any) => {
  return (
    <div
      key={key}
      className="flex aspect-square h-full items-center justify-center"
    >
      <button
        className={
          "flex aspect-square h-8 items-center justify-center rounded-full text-lg font-semibold " +
          (isToday
            ? " bg-gray-900 text-sky-300 hover:bg-gray-500 hover:text-gray-100"
            : "text-gray-600 hover:bg-gray-500 hover:text-gray-100") +
          (isCurrentMonth ? " " : " text-gray-300")
        }
      >
        {format(date, "d")}
      </button>
    </div>
  );
};
