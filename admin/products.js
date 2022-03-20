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
    <List  {...props}>
  
        <Datagrid>
          <TextField source="title" />
          <ImageField source="image"  />

        </Datagrid>
  
    </List>
  );
};
