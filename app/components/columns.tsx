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
    id: "action",
    cell: ({ row }) => {
      return (
        <span
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-6 h-6 cursor-pointer lg:hidden"
        >
          {" "}
          &gt;
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Event Name",
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
          className={`gap-2 text-white lg:tracking-tighter lg:text-[10px] ${
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
