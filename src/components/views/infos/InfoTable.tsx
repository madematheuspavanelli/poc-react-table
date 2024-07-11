import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "react-query";

import { listProducts } from "@/api/products/list";
import { Product } from "@/types/Product";

export function InfoTable() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => listProducts(),
  });

  const columnHelper = createColumnHelper<Product>();
  const columns = [
    columnHelper.display({
      id: "title",
      header: "Title",
      cell: ({ row, getValue }) => <div>{row.original.title}</div>,
    }),
    columnHelper.display({
      id: "price",
      header: "Price",
      cell: (props) => <div>{props.cell.row.original.price}</div>,
    }),
    columnHelper.display({
      id: "rating",
      header: "Rating",
      cell: (props) => <div>{props.cell.row.original.rating.rate}</div>,
    }),
  ];

  const table = useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th id={header.id}>{header.column.columnDef.header}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
