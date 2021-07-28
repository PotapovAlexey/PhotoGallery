import React from "react";
import "./App.css";
import MainPageContainer from "../src/components/MainPage/MainPageContainer";
import SideBar from "../src/components/SideBar/SideBar";
import { Provider } from "react-redux";
import { store } from "./redux/redux-store";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="appWrapper">
      <div className=".container-fluid">
        <Provider store={store}>
          <div className="row">
            <div className="col-2">
              <SideBar />
            </div>
            <div className="col-10">
              <MainPageContainer />
            </div>
          </div>
        </Provider>
      </div>
    </div>
  );
}

export default App;
