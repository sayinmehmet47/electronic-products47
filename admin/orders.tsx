import * as React from "react";

import {
  SimpleList,
  List,
  Datagrid,
  EmailField,
  TextField,
  ImageInput,
  ImageField,
} from "react-admin";



export const OrdersList = () => {
  return (
    <List >
      <Datagrid>
        <TextField source="customer" />
        <TextField source="total" />
        <TextField source="address" />
      </Datagrid>
    </List>
  );
};
