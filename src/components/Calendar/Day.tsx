import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";

const Day = ({
  k,
  date,
  isCurrentMonth,
  isPrevMonth,
  isNextMonth,
  isToday,
  selectedDate,
  setSelectedDate,
  nextMonth,
  previousMonth,
}: any) => {
  return (
    <div
      key={k}
      className="flex aspect-square h-full items-center justify-center"
    >
      <motion.button
        className={
          "group relative flex aspect-square h-8 items-center justify-center rounded-full text-lg font-semibold " +
          (isCurrentMonth &&
          !isToday &&
          selectedDate !== format(date, "d-MMM-yyyy")
            ? " text-gray-600 hover:text-gray-100"
            : isToday
            ? " text-sky-300 hover:text-gray-100"
            : selectedDate === format(date, "d-MMM-yyyy")
            ? " text-gray-100"
            : " text-gray-300 hover:text-gray-200")
        }
        onClick={() => {
          isNextMonth && nextMonth();
          isPrevMonth && previousMonth();
          setSelectedDate(format(date, "d-MMM-yyyy"));
        }}
      >
        <AnimatePresence>
          {selectedDate === format(date, "d-MMM-yyyy") && (
            <motion.div
              // layoutId="selectedDate"
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                transition: {
                  duration: 0.3,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
              className={
                "absolute inset-0 z-0 aspect-square h-8 rounded-full bg-gray-900 ring-2 ring-sky-200"
              }
            ></motion.div>
          )}
        </AnimatePresence>
        <span className="z-10">{format(date, "d")}</span>
      </motion.button>
    </div>
  );
};

export default Day;
