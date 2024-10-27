"use client";

import { useState } from "react";
import TablePagination from "./TablePagination";
import TableTop from "./TableTop";
import EventModal from "./EventModal";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  ExpandedState,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  getExpandedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface EventTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function EventsTable<TData, TValue>({
  columns,
  data,
}: EventTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: (row) => true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting,
      expanded: expanded,
    },
  });

  const handleRowClick = (row: any) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };
  return (
    <div>
      <TableTop table={table} />
      <Table className="bg-card text-sm">
        <TableHeader className=" bg-[#F1F5F9] dark:bg-[#6A6676]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    key={header.id}
                    className={`${
                      header.column.columnDef.header === "Speaker" ||
                      header.column.columnDef.header === "Date"
                        ? "hidden lg:table-cell"
                        : ""
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <>
                <TableRow
                  key={row.id}
                  className={`cursor-pointer ${
                    row.getIsExpanded() && "bg-muted dark:bg-background"
                  }`}
                  onClick={() => handleRowClick(row)}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className={
                          cell.column.columnDef.header === "Speaker" ||
                          cell.column.columnDef.header === "Date"
                            ? "hidden lg:table-cell"
                            : ""
                        }
                      >
                        {flexRender(cell.column.columnDef.cell, {
                          ...cell.getContext(),
                        })}
                      </TableCell>
                    );
                  })}
                </TableRow>
                {row.getIsExpanded() && (
                  <TableRow
                    key={`${row.id}-expanded`}
                    className="bg-muted border-white border-t dark:bg-background"
                  >
                    <TableCell>{row.getValue("speaker")}</TableCell>
                    <TableCell> {row.getValue("date")}</TableCell>
                  </TableRow>
                )}
              </>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No event found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Modal for displaying row details */}
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedRow={selectedRow}
      />
      {/* Add TablePagination component */}
      <TablePagination table={table} />
    </div>
  );
}
