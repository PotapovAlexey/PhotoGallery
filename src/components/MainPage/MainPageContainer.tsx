import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getAlbumsDataThunk } from "../../redux/reducers/mainPageReducer";
import MainPage from "./MainPage";
import Header from "../Header/Header";

const MainPageContainer = () => {
  const dispatch = useDispatch();
  const mainPageData = useSelector((state: AppStateType) => state.mainPage);

  useEffect(() => {
    dispatch(
      getAlbumsDataThunk(
        mainPageData.currentPage,
        mainPageData.pageSize,
        mainPageData.albumID
      )
    );
  }, []);

  const onPageChange = (currentPage: number) => {
    dispatch(
      getAlbumsDataThunk(
        currentPage,
        mainPageData.pageSize,
        mainPageData.albumID
      )
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <MainPage mainPageData={mainPageData} onPageChange={onPageChange} />
        </div>
      </div>
    </div>
  );
};

export default MainPageContainer;
