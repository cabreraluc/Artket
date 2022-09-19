import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './store'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from 'axios'
import dotenv from "dotenv";
dotenv.config();
const { REACT_AUTH0_DOMAIN, REACT_AUTH0_CLIENT_ID  } = process.env


  const domain = {REACT_AUTH0_DOMAIN}
  const clientID = {REACT_AUTH0_CLIENT_ID}



axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(

  <React.StrictMode>
    <Auth0Provider 
    domain={domain} 
    clientId={clientID} 
    redirectUri={window.location.origin}>

    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
