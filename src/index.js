import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store/Store";
import { Provider } from "react-redux";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from "./reportWebVitals";

let persistor = persistStore(store);
export { persistor };


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
