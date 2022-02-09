import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="title" />
    </Datagrid>
  </List>
);
