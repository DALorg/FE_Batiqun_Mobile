import "../styles/globals.css";
// import "../js/main.js";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";
import store from "../redux/store/store";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MoralisProvider
        appId={process.env.NEXT_PUBLIC_APP_ID}
        serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </Provider>
  );
}

export default MyApp;
