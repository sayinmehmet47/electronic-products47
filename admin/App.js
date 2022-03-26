// in src/App.js
import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource } from "react-admin";
import UserIcon from "@material-ui/icons/Group";
import Send from '@material-ui/icons/Send';
import createAdminStore from "./createAdminStore";
import { ProductsList } from "./products";
import dataProvider from "./dataProvider";
import { OrdersList } from "./orders";
import axios from "axios";
import { PostCreate } from "./post";
// dependency injection
const authProvider = () => Promise.resolve();

const history = createHashHistory();

const App = () => {

React.useEffect(() => {
  axios.get("/api/products").then(res=>console.log(res))

}, [])

return (  <Provider
    store={createAdminStore({
      authProvider,
      dataProvider,
      history,
    })}
  >
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="My Admin"
    >
      <Resource name="products" create={PostCreate}  icon={UserIcon} list={ProductsList} />
      <Resource name="orders" icon={Send} list={OrdersList} />

    </Admin>
  </Provider>)
}
    

export default App;
