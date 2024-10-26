import { Button } from "./ui/button";
import { Table as TableComponent } from "@tanstack/react-table";

function SortButton({
  table,
  column,
  buttonName,
}: {
  table: TableComponent<any>;
  column: string;
  buttonName: string;
}) {
  return (
    <Button
      className="rounded border text-black bg-transparent dark:bg-card dark:border-none dark:text-white text-xs h-8 lg:w-28"
      onClick={() =>
        table
          .getColumn(column)
          ?.toggleSorting(table.getColumn(column)?.getIsSorted() === "asc")
      }
    >
      {buttonName}
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
  );
}

export default SortButton;
