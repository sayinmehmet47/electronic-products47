// in src/App.js
import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import createAdminStore from "./createAdminStore";
import convertHTTPResponseToREST from "./dataProvider";

// dependency injection
const dataProvider = jsonServerProvider(
  convertHTTPResponseToREST("http://localhost:3000/api")
);
const authProvider = () => Promise.resolve();

const history = createHashHistory();

const App = () => (
  <Provider
    store={createAdminStore({
      authProvider,
      dataProvider,
      history,
    })}
  >
    <Admin title="Dashboard" dataProvider={dataProvider} history={history}>
      <Resource name="products" list={ListGuesser} />
    </Admin>
  </Provider>
);

export default App;
