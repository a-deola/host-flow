import React from "react";
import { Input } from "./ui/input";

import { Table as TableComponent } from "@tanstack/react-table";

function SearchBar({ table }: { table: TableComponent<any> }) {
  return (
    <span className="relative w-full">
      <svg
        className="absolute top-2 left-2 text-muted-foreground"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.98 6.98 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.975z"
        ></path>
      </svg>
      <Input
        placeholder="Search..."
        value={table.getState().globalFilter ?? ""}
        onChange={(event) => table.setGlobalFilter(event.target.value)}
        className="w-full outline-none h-8 border lg:min-w-44 dark:bg-card dark:border-none"
      />
    </span>
  );
}

export default SearchBar;
