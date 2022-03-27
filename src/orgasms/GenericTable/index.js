import React, { useEffect } from "react";
import { TableHead, TableBody } from "molecules";
import {
  useTable,
  useFlexLayout,
  useSortBy,
  useExpanded,
  useRowSelect,
} from "react-table";
import { Table as MUTable, CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
function Table({
  columns,
  data,
  click,
  className,
  loading,
  selectedRows,
  setSelectedRows,
  handleChange,
  headClass,
  tableCss,
  isNotHead,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    selectedFlatRows,
    state: { selectedRowPaths },
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      initialState: { pageSize: data?.length, pageCount: data?.length },
      manualSortBy: true,
      disableSortBy: true,
      state: {
        selectedRowPaths: selectedRows,
      },
    },
    useFlexLayout,
    useSortBy,
    useExpanded,
    useRowSelect
  );
  useEffect(() => {
    if (handleChange) {
      handleChange(selectedFlatRows);
    }
    setSelectedRows(selectedRowPaths);
  }, [setSelectedRows, selectedRowPaths, selectedFlatRows]);
  return (
    <MUTable
      {...getTableProps()}
      className={`w-full -striped -highlight ${tableCss} overflow-hidden`}
    >
      {isNotHead ? null : (
        <TableHead
          headClass={headClass}
          className={`${className} py-0`}
          headerGroups={headerGroups}
        />
      )}
      {loading ? (
        <div className="w-100 h-80 flex items-center justify-center pl-10 py-60 bg-white">
          <CircularProgress color="primary" />
        </div>
      ) : (
        <TableBody
          click={click}
          prepareRow={prepareRow}
          rows={rows}
          visibleColumns={visibleColumns}
          body={getTableBodyProps}
          className={className}
        />
      )}
    </MUTable>
  );
}
Table.defaultProps = {
  headClass: "py-2 border-t border-gray-200 border-opacity-50",
  headerGroups: "",
  click: () => {},
  handleChange: () => {
    return;
  },
  setSelectedRows: () => {
    return;
  },
};
Table.prototype = {
  handleChange: PropTypes.func,
  setSelectedRows: PropTypes.func,
};
export default Table;
