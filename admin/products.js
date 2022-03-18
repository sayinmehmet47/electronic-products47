import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import {
  SimpleList,
  List,
  Datagrid,
  EmailField,
  TextField,
  ImageInput,
  ImageField,
} from "react-admin";

export const ProductsList = (props) => {

  return (
    <List title="All users" {...props}>
  
        <Datagrid>
          <TextField source="title" />
          <ImageField source="image" title="title" />

        </Datagrid>
  
    </List>
  );
};
