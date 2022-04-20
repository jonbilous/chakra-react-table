import {
  Table as ChakraTable,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React, { useMemo } from "react";

interface Column<T> {
  key: string;
  renderCell: (item: T) => React.ReactNode;
  label: React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  getRowKey: (item: T) => string;
}

const Table = <T extends unknown>({
  columns,
  data,
  getRowKey,
}: TableProps<T>): JSX.Element => {
  return useMemo(
    () => (
      <ChakraTable>
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.key}>{column.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row) => {
            const key = getRowKey(row);

            return (
              <Tr key={key}>
                {columns.map((column) => {
                  return (
                    <Td key={[column.key, key].join("-")}>
                      {column.renderCell(row)}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </ChakraTable>
    ),
    [columns, data, getRowKey]
  );
};

export default Table;
