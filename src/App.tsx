import React from "react";
import logo from "./logo.svg";
import "./App.css";

// redux
import { store } from "store/store";
import { Provider } from "react-redux";
import Livescore from "pages/Livescore/Livescore";

function App() {
  return (
    <div className="App">
      <Livescore/>
    </div>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default App;
export { AppWrapper };
