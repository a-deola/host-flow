"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./ui/badge";

export type Event = {
  id: number;
  name: string;
  date: string;
  speaker: string;
  status: "In Progress" | "Completed";
};

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <div className="flex gap-5">
          <button
            onClick={(e) => {
              e.stopPropagation();
              row.getToggleExpandedHandler()();
            }}
            className="lg:hidden"
          >
            <span className="text-lg font-semibold">
              {row.getIsExpanded() ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M16.53 8.97a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 12.44l3.47-3.47a.75.75 0 0 1 1.06 0"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M9.97 7.47a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06L13.44 12L9.97 8.53a.75.75 0 0 1 0-1.06"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </span>
          </button>
          <span>{row.original.name}</span>
        </div>
      ) : (
        " "
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "speaker",
    header: "Speaker",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return (
        <Badge
          className={`gap-2 text-white whitespace-nowrap lg:text-[10px] ${
            status === "In Progress"
              ? " lg:bg-blue-foreground lg:text-blue dark:lg:bg-transparent dark:lg:border-blue"
              : "bg-success lg:bg-success-foreground lg:text-success dark:lg:bg-transparent dark:lg:border-success"
          } `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className="hidden lg:inline-block"
          >
            <path
              fill="currentColor"
              stroke="currentColor"
              strokeWidth={4}
              d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
            ></path>
          </svg>
          <span>{row.original.status}</span>
        </Badge>
      );
    },
  },
];
