// in src/App.js
import * as React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import Send from '@material-ui/icons/Send';
<<<<<<< HEAD
import createAdminStore from "./createAdminStore";
import { ProductsList } from "./products";
import dataProvider from "./dataProvider";
import { OrdersList } from "./orders";
import axios from "axios";
import { PostCreate } from "./post";
=======
import createAdminStore from './createAdminStore';
import { ProductsList } from './products';
import dataProvider from './dataProvider';
import { OrdersList } from './orders';
import axios from 'axios';
import { PostCreate } from './post';
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6
// dependency injection
const authProvider = () => Promise.resolve();

const history = createHashHistory();

const App = () => {
  return (
    <Provider
      store={createAdminStore({
        authProvider,
        dataProvider,
        history,
      })}
    >
<<<<<<< HEAD
      <Resource name="products" create={PostCreate}  icon={UserIcon} list={ProductsList} />
      <Resource name="orders" icon={Send} list={OrdersList} />

    </Admin>
  </Provider>)
}
    
=======
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        history={history}
        title="My Admin"
      >
        <Resource
          name="products"
          create={PostCreate}
          icon={UserIcon}
          list={ProductsList}
        />
        <Resource name="orders" icon={Send} list={OrdersList} />
      </Admin>
    </Provider>
  );
};
>>>>>>> 68dc4e7605da558fa502f2e21d6cb3823cc669b6

export default App;
