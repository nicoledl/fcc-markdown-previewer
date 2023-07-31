import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Importa el Provider
import App from "./App";
import { store } from "./store"; // Importa la store desde el archivo store.js
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
