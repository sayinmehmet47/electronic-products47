// in src/App.js
import * as React from "react";
import { Provider } from "react-redux";
import { createHashHistory } from "history";
import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import createAdminStore from "./createAdminStore";

// dependency injection
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
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
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
      title="My Admin"
    >
      <Resource name="users" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  </Provider>
);

export default App;
