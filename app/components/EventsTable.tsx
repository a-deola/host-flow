"use client";

import { useState } from "react";
import TablePagination from "./TablePagination";
import TableTop from "./TableTop";
import EventModal from "./EventModal";
import { Event } from "./columns";
import { Row } from "@tanstack/react-table";

import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  ExpandedState,
  RowSelectionState,
  getPaginationRowModel,
  getSortedRowModel,
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

export interface EventTableProps {
  columns: ColumnDef<Event, unknown>[];
  data: Event[];
}

export function EventsTable({ columns, data }: EventTableProps) {
  const [selectedRow, setSelectedRow] = useState<Event | null>(null);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const table = useReactTable({
    data,
    columns,
    getRowCanExpand: (_row) => true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    onExpandedChange: setExpanded,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    state: {
      sorting,
      expanded,
      rowSelection,
    },
  });

  const handleRowClick = (row: Row<Event>) => {
    setSelectedRow(row.original);
    setRowSelection((prev) => ({
      ...prev,
      [row.id]: !prev[row.id],
    }));
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
