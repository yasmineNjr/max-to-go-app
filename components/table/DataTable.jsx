"use client"

import {
  ColumnDef,
  getPaginationRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  // Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
const Table = dynamic(() =>
  import("@/components/ui/table").then((mod) => mod.Table)
);
import { Button } from "../ui/button"
import Image from "next/image"
import { arrow } from "@/public/assets"
import dynamic from "next/dynamic";

const DataTable = ({
  columns,
  data,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <div className="data-table">
      <Table className="shad-table">
        <TableHeader >
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="shad-table-row-header ">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className='text-center font-semibold text-foreground'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="shad-table-row hover:bg-transparent"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center" >
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="table-actions">
      <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="shad-gray-btn font-bold"
        >
          <Image
            src={arrow}
            width={24}
            height={24}
            alt="arrow"
          />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="shad-gray-btn"
        >
          <Image
            src={arrow}
            width={24}
            height={24}
            alt="arrow "
            className="rotate-180"
          />
        </Button>
      </div>
    </div>
  )
}

export default DataTable;