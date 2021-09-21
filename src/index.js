import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import {createStore} from "redux";
import reducer from "./reducers/reducer";

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>  {/* uygulamayı redux a bağladık */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
