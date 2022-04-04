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

export const OrdersList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="customer" />
        <TextField source="total" />
        <TextField source="address" />
      </Datagrid>
    </List>
  );
};
