import { AnimatePresence, motion } from "framer-motion";

const Step = ({
  step,
  currentStep,
  stepName,
}: {
  step: number;
  currentStep: number;
  stepName: string;
}) => {
  const state =
    step === currentStep
      ? "active"
      : step < currentStep
      ? "completed"
      : "inactive";

  const variants = {
    completed: {
      borderColor: "rgb(56 189 248)",
      backgroundColor: "rgb(56 189 248)",
      color: "rgb(255 255 255)",
      transition: {
        duration: 0.4,
        backgroundColor: {
          duration: 0.1,
        },
      },
    },
    active: {
      borderColor: "rgb(56 189 248)",
      backgroundColor: "rgb(255 255 255)",
      color: "rgb(56 189 248)",
      transition: {
        duration: 0.5,
      },
    },
    inactive: {
      borderColor: "rgb(209 213 219)",
      backgroundColor: "rgb(255 255 255)",
      color: "rgb(156 163 175 )",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-between gap-3 lg:flex-row">
      <AnimatePresence mode="wait">
        {currentStep > step && ( // if the step is completed
          <motion.div
            key={step}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.7,
                delay: 0.2,
                type: "spring",
              },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              transition: {
                duration: 0.3,
              },
            }}
            className="absolute -left-2 aspect-square w-16 rounded-full bg-sky-300"
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={false}
        animate={state}
        variants={variants}
        className={
          "relative z-10 flex aspect-square w-12 flex-none items-center justify-center rounded-full border-4"
        }
      >
        {currentStep > step ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <motion.path
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: state === "completed" ? 1 : 0,
                opacity: state === "completed" ? 1 : 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2,
                },
              }}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        ) : (
          step
        )}
      </motion.div>
      <div className="hidden items-center justify-center rounded-md text-center text-gray-500 md:flex">
        {stepName}
      </div>
    </div>
    // </AnimatePresence>
  );
};

// Path: src\components\Steps\Steps.tsx
export default Step;
