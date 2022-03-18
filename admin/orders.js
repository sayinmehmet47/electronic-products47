import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { SelectInput } from "react-admin";

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
    <List title="All users" {...props}>
      <Datagrid>
        <TextField source="customer" />
      </Datagrid>
    </List>
  );
};
