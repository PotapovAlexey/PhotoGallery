import React from "react";
import "./App.css";
import MainPageContainer from "../src/components/MainPage/MainPageContainer";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPageContainer />
      </Provider>
    </div>
  );
}

export default App;
