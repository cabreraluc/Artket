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


axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(

  <React.StrictMode>
    <Auth0Provider 
    domain="dev-nvy2ljvr.us.auth0.com"
    clientId="9sKrjpcY5kgAz1O6VQvxlipojdXX16dI"
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
