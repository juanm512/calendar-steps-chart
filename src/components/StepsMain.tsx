import { useState } from "react";
import Step from "./Steps/Step";

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
      className="relative bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5 dark:bg-neutral-800 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10 lg:max-w-4xl"
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
