import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import * as d3 from "d3";

const ChartMain = () => {
  const [ref, { width, height }] = useMeasure();
  const data = [
    [8, "Jan"],
    [5, "Feb"],
    [4, "Mar"],
    [9, "Apr"],
    [1, "May"],
    [7, "Jun"],
    [6, "Jul"],
    [3, "Aug"],
    [2, "Sep"],
    [0, "Oct"],
    [10, "Nov"],
    [11, "Dec"],
  ];

  return (
    <div
      id="chart"
      className="relative w-full bg-white px-6 py-8 shadow-xl ring-1 ring-gray-900/5  dark:bg-neutral-800 sm:mx-auto sm:max-w-xl sm:rounded-lg sm:px-10 lg:max-w-4xl"
    >
      <div className="mx-auto w-full max-w-xl lg:max-w-4xl">
        <div className="divide-y divide-gray-300/50">
          <div
            ref={ref}
            className="relative flex h-96 w-full justify-center space-y-6 pb-8 text-base leading-7 text-gray-600"
          >
            {width > 0 && (
              <ChartInner data={data} width={width} height={height} />
            )}
          </div>
          <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Chart
                </h3>
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-400">
                      1d
                    </span>
                    <span className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-400">
                      1w
                    </span>
                    <span className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-400">
                      1m
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-gray-900 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    View all
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartMain;

const ChartInner = ({ data, width, height }: any) => {
  let margin = {
    top: 20,
    right: 0,
    bottom: 20,
    left: 50,
  };

  let x = d3
    .scaleBand()
    .domain(data.map((d: any[]) => d[1]))
    .range([margin.left, width - margin.right]);
  let y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d: any[]) => d[0])!])
    .range([height - 2.5 * margin.bottom, margin.top]);

  let line = d3
    .line()
    .x((d: any) => x(d[1])!)
    .y((d: any) => y(d[0])!);
  let result = line(data);
  console.log(result);

  return (
    <svg className="bg-gray-700" viewBox={`0 0 ${width} ${height}`}>
      <g className="x-axis">
        {data.map((d: any) => (
          <text
            key={d[1]}
            x={x(d[1])!}
            y={height - margin.bottom}
            textAnchor="middle"
          >
            {d[1]}
          </text>
        ))}
      </g>
      <g className="y-axis">
        {y.ticks().map((d: any) => (
          <motion.text
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            key={d}
            x={margin.left - 20}
            y={y(d)!}
            textAnchor="end"
            alignmentBaseline="middle"
          >
            {d}
          </motion.text>
        ))}
      </g>
      <g className="bars">
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          d={result}
          fill="none"
          stroke="white"
        />
        {data.map((d: any, i: number) => (
          <>
            <motion.circle
              initial={{ r: 3 }}
              whileInView={{ r: 8, scale: 1.2 }}
              transition={{
                duration: 1,
                delay: 0.05 + i * 0.02,
                type: "spring",
              }}
              key={d[1]}
              cx={x(d[1])!}
              cy={y(d[0])!}
              fill="steelblue"
            />
            <motion.circle
              initial={{ r: 3, opacity: 0 }}
              whileInView={{ r: 5, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.05 + i * 0.02,
                type: "spring",
              }}
              key={d[1]}
              cx={x(d[1])!}
              cy={y(d[0])!}
              fill="black"
            />
          </>
        ))}
      </g>
    </svg>
  );
};
