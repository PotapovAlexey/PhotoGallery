import React from "react";
import "./App.css";
import MainPageContainer from "../src/components/MainPage/MainPageContainer";
import SideBar from "../src/components/SideBar/SideBar";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div className="container">
          <div className="row">
            <div className="w-25 p-3">
              <SideBar />
            </div>
            <div className="w-75 p-3">
              <MainPageContainer />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
