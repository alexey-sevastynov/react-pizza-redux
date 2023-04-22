import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/app.scss";

import App from "./App";

//_______REDUX
import store from "./redux/store";
import { Provider } from "react-redux";

//_______REACR-ROUTER-DOM
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
