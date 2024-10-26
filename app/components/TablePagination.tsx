import { Button } from "./ui/button";
import { Table as TableComponent } from "@tanstack/react-table";

function TablePagination({ table }: { table: TableComponent<any> }) {
  return (
    <div className="flex justify-between items-center mt-5 gap-2 w-full">
      <div className="flex space-x-2 w-4/5 md:full">
        <Button
          className=" border-2 bg-transparent dark:bg-card text-primary rounded dark:border-none disabled:bg-muted"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M14.03 7.47a.75.75 0 0 1 0 1.06L10.56 12l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
        <div className="flex gap-2 items-center">
          {Array.from({ length: table.getPageCount() }).map((_, index) => (
            <button
              key={index}
              onClick={() => table.setPageIndex(index)}
              className={`px-2 text-xs rounded-full flex  justify-center hover:scale-105 transition-all duration-300 dark:border-none w-3 ${
                table.getState().pagination.pageIndex === index
                  ? "bg-primary text-white"
                  : "bg-transparent text-black dark:text-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <Button
          className=" border-2 bg-transparent text-primary dark:bg-card dark:border-none rounded disabled:bg-muted"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
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
        </Button>
      </div>
      <div className="flex items-center gap-2 w-1/3 ">
        <span className="hidden">Show : </span>
        <span>
          <Button className="dark:text-white text-xs p-5 dark:bg-card w-20">
            10 rows
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
          </Button>
        </span>
      </div>
    </div>
  );
}

export default TablePagination;
