import * as React from 'react';
import { List, Datagrid, TextField, ImageField } from 'react-admin';

export const ProductsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="title" />
        <ImageField source="image" />
      </Datagrid>
    </List>
  );
};
