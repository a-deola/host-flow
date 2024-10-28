import React from "react";
import { Table as TableComponent } from "@tanstack/react-table";
import SearchBar from "./SearchBar";
import SortButton from "./SortButton";
import { Button } from "./ui/button";

function TableTop<TData>({ table }: { table: TableComponent<TData> }) {
  const rowCount = table.getFilteredRowModel().rows.length;
  return (
    <div className="mb-8 px-5 flex flex-col justify-between w-full lg:flex-row lg:p-0">
      <div className="flex flex-col gap-2 items-center lg:flex-row lg:w-2/3">
        <SearchBar table={table} />
        <div className="flex flex-col w-full gap-2 lg:items-center lg:flex-row">
          <SortButton table={table} column="date" buttonName="Date" />
          <SortButton table={table} column="status" buttonName="Status" />
          <SortButton table={table} column="name" buttonName="Name" />
          <span className="font-semibold text-muted-foreground lg:text-sm">
            Displaying {rowCount} results
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center lg:flex-row">
        <div className="flex items-center justify-between w-full gap-2">
          <span className="lg:text-sm">Sort:</span>
          <SortButton table={table} column="date" buttonName="Most Recent" />
        </div>
        <div className="flex items-center justify-between gap-1 w-full">
          <Button
            variant="outline"
            size="sm"
            className="rounded border text-black bg-transparent dark:bg-card dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 40 40"
            >
              <g fill="currentColor">
                <path d="M23.112 9.315a3.113 3.113 0 1 1-6.226.002a3.113 3.113 0 0 1 6.226-.002"></path>
                <circle cx={20} cy={19.999} r={3.112}></circle>
                <circle cx={20} cy={30.685} r={3.112}></circle>
              </g>
            </svg>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded border text-black bg-transparent dark:bg-card dark:text-white "
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 15 15"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M7.5 1.05a.45.45 0 0 1 .45.45v6.914l2.232-2.232a.45.45 0 1 1 .636.636l-3 3a.45.45 0 0 1-.636 0l-3-3a.45.45 0 1 1 .636-.636L7.05 8.414V1.5a.45.45 0 0 1 .45-.45M2.5 10a.5.5 0 0 1 .5.5V12c0 .554.446 1 .996 1h7.005A1 1 0 0 0 12 12v-1.5a.5.5 0 0 1 1 0V12a2 2 0 0 1-1.999 2H3.996A1.997 1.997 0 0 1 2 12v-1.5a.5.5 0 0 1 .5-.5"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <span>Export</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TableTop;
