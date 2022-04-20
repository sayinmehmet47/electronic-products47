import * as React from 'react';
import { List, Datagrid, TextField, ImageField, RaRecord } from 'react-admin';

export const ProductsList = (props:RaRecord) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <ImageField source="image" />
      </Datagrid>
    </List>
  );
};
