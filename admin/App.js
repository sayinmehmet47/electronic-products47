// in src/App.js
import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/People";
import { ProductsList } from "./products";
import dataProvider from "./dataProvider";
import { OrdersList } from "./orders";
import { PostCreate } from "./post";
import authProvider from "./authProvider";
import { ProductionQuantityLimitsOutlined, SendOutlined } from "@mui/icons-material";

const history = createHashHistory();

const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="My Admin"
      
    >
      <Resource
        name="products"
        create={PostCreate}
        icon={ProductionQuantityLimitsOutlined}
        list={ProductsList}
      />
      <Resource name="orders" icon={SendOutlined} list={OrdersList} />
    </Admin>
  );
};

export default App;
