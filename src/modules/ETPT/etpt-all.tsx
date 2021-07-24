/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { Typography, Card, CardContent, CardHeader } from '@material-ui/core';
import React from 'react';
import EtptIndividual from './etpt-individual';

const Etpt = () => {
  const names = ['Florita', 'Dylan'];
  return (
    <Card>
      <CardHeader title="ETPT" />
      <CardContent>
        {names.map((name: string, index: number) => (
          // eslint-disable-next-line react/no-array-index-key
          <EtptIndividual key={index} name={name} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Etpt;
