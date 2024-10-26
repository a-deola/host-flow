"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  SortingState,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  getFilteredRowModel,
  CellContext,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import TablePagination from "./TablePagination";
import TableTop from "./TableTop";
import EventModal from "./EventModal";

interface EventTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
export interface CustomCellContext<T> extends CellContext<T, unknown> {
  handleMobileRowClick: (row: any) => void;
  expandedRowId: string | null;
}

export function EventsTable<TData, TValue>({
  columns,
  data,
}: EventTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
  });
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedRowId, setExpandedRowId] = useState(null);

  const handleRowClick = (row: any) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  // Handler to toggle the visibility of hidden fields
  const handleMobileRowClick = (row: any) => {
    setExpandedRowId((prevId) => (prevId === row.id ? null : row.id));
  };
  return (
    <div>
      <TableTop table={table} />
      <Table className="bg-card text-sm">
        <TableHeader className=" bg-[#F1F5F9] dark:bg-[#6A6676]">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => {
                return (
                  <TableHead
                    key={header.id}
                    // make second column header span 2 columns
                    colSpan={index === 1 ? 2 : 1}
                    className={`${
                      header.column.columnDef.header === "Speaker" ||
                      header.column.columnDef.header === "Date"
                        ? "hidden lg:table-cell"
                        : ""
                    } ${index === 0 ? "hidden" : ""}`}
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
              <TableRow
                key={row.id}
                className="cursor-pointer"
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
                        handleMobileRowClick,
                        expandedRowId,
                      })}
                    </TableCell>
                  );
                })}
              </TableRow>
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
