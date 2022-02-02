import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/global.css";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_RIGHT,
  timeout: 3000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

export default function App({ Component, pageProps }) {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AlertProvider>
  );
}
