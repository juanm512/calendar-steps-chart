import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

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
    date: "29-1-2023",
    read: true,
  },
  {
    id: 4,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "18-1-2023",
    read: true,
  },
  {
    id: 5,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2023",
    read: true,
  },
  {
    id: 6,
    title: "New message from Jane Dorsey",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "5-2-2023",
    read: false,
  },
  {
    id: 7,
    title: "New message from Jack Sparrow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "29-1-2023",
    read: true,
  },
  {
    id: 8,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "18-1-2023",
    read: false,
  },
  {
    id: 9,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2023",
    read: false,
  },
  {
    id: 10,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2023",
    read: false,
  },
  {
    id: 10,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2023",
    read: false,
  },
  {
    id: 10,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2023",
    read: false,
  },
  {
    id: 10,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2023",
    read: false,
  },
  {
    id: 10,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2023",
    read: false,
  },
  {
    id: 10,
    title: "New message from John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "10-1-2022",
    read: false,
  },
];

const Notifications = () => {
  return (
    <div className="flex flex-col gap-4 md:px-16">
      {notifications.map((item: any, index: number) => (
        <motion.div
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
          <div className="flex basis-9/12 flex-row items-center gap-2">
            <div
              className={
                "flex aspect-square h-10 items-center justify-center rounded-full " +
                (item.read ? " bg-sky-500" : " bg-gray-500")
              }
            >
              {item.read ? "✔" : "✖"}
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-400">
                {item.title}
              </div>
              <div className="h-4 overflow-hidden text-xs font-normal text-gray-500">
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
        </motion.div>
      ))}
    </div>
  );
};

// Path: src\components\NavBar\NavBar.tsx
export default Notifications;
