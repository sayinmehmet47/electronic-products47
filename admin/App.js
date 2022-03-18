// in src/App.js
import * as React from "react";
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { Admin, Resource} from 'react-admin';
import UserIcon from '@material-ui/icons/Group';
import createAdminStore from './createAdminStore';
import { ProductsList } from "./products";
import dataProvider from "./dataProvider";
import { OrdersList } from "./orders";

// dependency injection
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
           <Resource name="products" icon={UserIcon} list={ProductsList} />
           <Resource name="orders" icon={UserIcon} list={OrdersList} />

        </Admin>
    </Provider>
);

export default App;