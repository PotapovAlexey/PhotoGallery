import React, { useState } from "react";
import styles from "./SideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import { getAlbumsDataThunk } from "../../redux/reducers/mainPageReducer";
import { InitialMainPageReducerStateType } from "../../redux/reducers/mainPageReducerTypes";

const SideBar = () => {
  const dispatch = useDispatch();
  const mainPageData = useSelector(
    (state: AppStateType): InitialMainPageReducerStateType => state.mainPage
  );
  const [value, setValue] = useState(0);

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let title = e.currentTarget.value;
    const num = parseInt(title);
    setValue(num);
  };
  const onButtonPress = (value: number) => {
    dispatch(
      getAlbumsDataThunk(mainPageData.currentPage, mainPageData.pageSize, value)
    );
  };
  return (
    <div className={styles.sideBarContainer}>
      <h1>Search</h1>
      <div>
        <p>Add album ID</p>
        <div className="form-group">
          <input
            placeholder="add album id"
            onChange={searchHandler}
            type="number"
            className="form-control"
          ></input>
        </div>
      </div>
      <div>
        <button
          onClick={() => onButtonPress(value)}
          type="button"
          className="btn btn-dark"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SideBar;
