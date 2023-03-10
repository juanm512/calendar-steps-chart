import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import usePrevious from "../hooks/usePrevious";
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
import Day from "./Calendar/Day";

type day = {
  date: Date | number;
  isCurrentMonth: boolean;
  isPrevMonth: boolean;
  isNextMonth: boolean;
  isToday: boolean;
};
type variantsProps = {
  monthDirection: number;
  width: number;
};

let variants = {
  enter: ({ monthDirection, width }: variantsProps) => ({
    x: monthDirection * width,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: ({ monthDirection, width }: variantsProps) => ({
    x: monthDirection * -width,
    opacity: 0,
  }),
};

export default function CalendarMain() {
  let today = startOfToday();
  const [selectedDate, setSelectedDate] = useState(format(today, "d-MMM-yyyy"));
  const [selectedMonth, setSelectedMonth] = useState(
    format(new Date(), "MMMM-yyyy")
  );
  let firstDayCurrentMonth = startOfMonth(
    parse(selectedMonth, "MMMM-yyyy", new Date())
  );

  const [ref, { width }] = useMeasure();
  let previous = usePrevious(selectedMonth);
  let monthDirection =
    previous && parse(previous, "MMMM-yyyy", new Date()) < firstDayCurrentMonth
      ? -1
      : 1;

  const [days, setDays] = useState<day[]>([]);

  useEffect(() => {
    let lastDayCurrentMonth = endOfMonth(firstDayCurrentMonth);

    let daysInterval = eachDayOfInterval({
      start: add(firstDayCurrentMonth, {
        days: -getDay(firstDayCurrentMonth),
      }),
      end: add(lastDayCurrentMonth, {
        days: 6 - getDay(lastDayCurrentMonth),
      }),
    });

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
    setDays(daysArray);
  }, [selectedMonth]);

  function addMonth(n: number) {
    setSelectedMonth(
      format(add(firstDayCurrentMonth, { months: n }), "MMMM-yyyy")
    );
  }

  return (
    //
    <div
      id="calendar"
      className="relative w-full bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5  dark:bg-neutral-800 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10 lg:max-w-4xl"
    >
      <div className="mx-auto w-full max-w-xl lg:max-w-4xl">
        <div className="divide-y divide-gray-300/50">
          <div className="flex justify-center space-y-6 pb-8 text-base leading-7  text-gray-600">
            <div className="grid w-full grid-cols-3 justify-items-center md:w-8/12 ">
              <motion.button
                onClick={() => addMonth(-1)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="flex aspect-square h-8 items-center overflow-hidden rounded-full p-1 hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square h-8"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M11 17h6l-4 -5l4 -5h-6l-4 5z"></path>
                </svg>
              </motion.button>
              <div className="flex h-8 w-full items-center justify-center overflow-hidden text-center">
                <AnimatePresence
                  exitBeforeEnter
                  custom={{ monthDirection, width: width * 0.5 }}
                >
                  <motion.p
                    key={selectedMonth + "header"}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={{ monthDirection, width: width * 0.5 }}
                    transition={{
                      opacity: {
                        duration: 0.2,
                      },
                    }}
                    className="text-base font-medium text-gray-600 dark:text-gray-300"
                  >
                    {selectedMonth}
                  </motion.p>
                </AnimatePresence>
              </div>
              <motion.button
                onClick={() => addMonth(1)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className="flex aspect-square h-8 items-center overflow-hidden rounded-full p-1 hover:bg-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="aspect-square h-8"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M13 7h-6l4 5l-4 5h6l4 -5z"></path>
                </svg>
              </motion.button>
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
              <motion.div
                ref={ref}
                className="flex w-full items-center justify-center overflow-hidden"
              >
                <AnimatePresence
                  exitBeforeEnter
                  custom={{ monthDirection, width }}
                >
                  <motion.div
                    key={selectedMonth}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={{ monthDirection, width }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="grid w-full grid-cols-7 rounded-lg border shadow-sm md:w-8/12"
                  >
                    {days &&
                      days.map((day) => {
                        return (
                          <Day
                            k={day.date.toString()}
                            date={day.date}
                            isCurrentMonth={day.isCurrentMonth}
                            isPrevMonth={day.isPrevMonth}
                            isNextMonth={day.isNextMonth}
                            isToday={day.isToday}
                            selectedDate={selectedDate}
                            setSelectedDate={setSelectedDate}
                            nextMonth={() => addMonth(1)}
                            previousMonth={() => addMonth(-1)}
                          />
                        );
                      })}
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
          <div className="space-y-6 pt-8 text-base leading-7 text-gray-600">
            <div className="flex flex-col items-center justify-center gap-2">
              <AnimatePresence exitBeforeEnter>
                <motion.span
                  key={selectedDate}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-semibold tracking-widest text-gray-600 dark:text-gray-300"
                >
                  {format(
                    parse(selectedDate, "dddd-MMMM-yyyy", new Date()),
                    "EEEE, dd MMMM yyyy"
                  )}
                </motion.span>
              </AnimatePresence>
              <motion.button
                whileTap={{ scale: 0.98 }}
                whileHover={{
                  scale: 1.02,
                }}
                className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-md border-2 bg-gray-200 px-2 py-1 hover:border-gray-500 dark:bg-gray-700 dark:text-gray-300 sm:w-6/12"
              >
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block aspect-square h-6"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
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
                </>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
