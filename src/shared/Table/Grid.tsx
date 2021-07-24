/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as React from 'react';
import { DataGrid, GridColumns, GridRowsProp } from '@material-ui/data-grid';

interface Props {
  columns: GridColumns;
  rows: GridRowsProp;
}

const Grid: React.FC<Props> = ({ columns, rows }) => {
  return (
    <DataGrid
      columns={columns}
      rows={rows}
      density="compact"
      hideFooter
      disableColumnMenu
    />
  );
};

export default Grid;
