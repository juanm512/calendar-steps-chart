import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const stepsNames = [
  "Create Account",
  "Select avatar",
  "Profile Information",
  "Verify",
];

export default function Steps() {
  const [steps, setSteps] = useState(1);
  return (
    <div
      id="steps"
      className="relative bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10 lg:max-w-4xl"
    >
      <div className="mx-auto max-w-xl lg:max-w-4xl">
        <div className="divide-y divide-gray-300/50">
          <div className="space-y-6 pb-8 text-base leading-7 text-gray-600">
            <div className="flex flex-row flex-wrap justify-between md:flex-nowrap">
              <div className="basis-12/12 order-2 mx-auto mt-2 flex w-full items-center justify-center px-4 text-gray-500 sm:w-3/4 md:hidden">
                {stepsNames[steps - 1]}
              </div>

              <Step step={1} currentStep={steps} stepName={stepsNames[0]} />
              <Step step={2} currentStep={steps} stepName={stepsNames[1]} />
              <Step step={3} currentStep={steps} stepName={stepsNames[2]} />
              <Step step={4} currentStep={steps} stepName={stepsNames[3]} />
            </div>
          </div>
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <p>
              An advanced online playground for Tailwind CSS, including support
              for things like:
            </p>
            <p>
              Perfect for learning how the framework works, prototyping a new
              idea, or creating a demo to share online.
            </p>
          </div>
          <div className="flex flex-row justify-around pt-8 text-base font-semibold leading-7">
            <button
              onClick={() => setSteps((prev) => (prev === 1 ? 5 : prev - 1))}
              className="rounded-3xl bg-gray-200 py-1 px-4 text-gray-400 hover:bg-gray-300"
            >
              Back
            </button>
            <button
              onClick={() => setSteps((prev) => (prev === 5 ? 1 : prev + 1))}
              className="rounded-3xl bg-sky-400 py-1 px-4 text-gray-100 hover:bg-sky-300"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Path: src\components\Steps.tsx

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
                  duration: 0.7,
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
