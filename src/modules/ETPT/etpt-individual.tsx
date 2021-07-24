/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Box } from '@material-ui/core';
import React from 'react';
import Grid from '../../shared/Table/Grid';

interface Props {
  name: string;
}

const EtptIndividual: React.FC<Props> = ({ name }) => {
  const columns = [
    { field: 'name', headerName: name, editable: true, width: 150 },
    {
      field: 'creation',
      headerName: 'Création',
      type: 'number',
      editable: true,
      width: 180,
    },
    {
      field: 'creation_recif',
      headerName: 'Création Récif',
      type: 'number',
      editable: true,
      width: 180,
    },
    {
      field: 'cilaos',
      headerName: 'Cilaos',
      type: 'number',
      editable: true,
      width: 180,
    },
    {
      field: 'mafate7',
      headerName: 'Mafate 7',
      type: 'number',
      editable: true,
      width: 180,
    },
    {
      field: 'guetali',
      width: 180,
      headerName: 'Guetali',
      type: 'number',
      editable: true,
    },
    {
      field: 'med',
      headerName: 'Med',
      width: 180,
      editable: true,
      type: 'number',
    },
    {
      field: 'tamtam',
      headerName: 'Tamtam',
      width: 180,
      type: 'number',
      editable: true,
    },
    {
      field: 'hd',
      headerName: 'HD',
      editable: true,
      width: 180,
      type: 'number',
    },
    {
      field: 'total',
      headerName: 'Total prévu',
      type: 'number',
      editable: true,
      width: 180,
    },
  ];

  const rows = [
    { id: 1, name: 'ETPT', creation: 0.07, med: 0.14, tamtam: 0.28, hd: 0 },
  ];

  return (
    <Box width="100%" height={250}>
      <Grid columns={columns} rows={rows} />
    </Box>
  );
};

export default EtptIndividual;
