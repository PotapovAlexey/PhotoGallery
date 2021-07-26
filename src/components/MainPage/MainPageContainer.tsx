import React, { useEffect } from "react";
import "./mainPage.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import {
  getAlbumsDataThunk,
  setFilteredAlbumsAC,
} from "../../redux/reducers/mainPageReducer";
import MainPage from "./MainPage";
import { title } from "process";

const MainPageContainer = () => {
  const dispatch = useDispatch();
  const mainPageData = useSelector((state: AppStateType) => state.mainPage);

  useEffect(() => {
    dispatch(
      getAlbumsDataThunk(mainPageData.currentPage, mainPageData.pageSize)
    );
  }, [mainPageData.currentPage, mainPageData.albums.title]);
  const onPageChange = (currentPage: number) => {
    dispatch(getAlbumsDataThunk(currentPage, mainPageData.pageSize));
  };
  const filterAlbums = (title: string) => {
    dispatch(setFilteredAlbumsAC(title));
  };

  return (
    <div className="mainPageContainerWrapper">
      <MainPage
        mainPageData={mainPageData}
        onPageChange={onPageChange}
        filterAlbums={filterAlbums}
      />
    </div>
  );
};

export default MainPageContainer;
