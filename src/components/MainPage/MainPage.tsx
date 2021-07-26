import React, { useState } from "react";
import "./mainPage.css";
import {
  InitialMainPageReducerStateType,
  albumsType,
} from "../../redux/reducers/mainPageReducerTypes";

type PropsType = {
  mainPageData: InitialMainPageReducerStateType;
  onPageChange: (pageNumber: number) => void;
  filterAlbums: (title: string) => void;
};

const MainPage = (props: PropsType) => {
  let pages = [1, 2, 3, 4, 5];
  const [value, setValue] = useState("");
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let title = e.currentTarget.value;
    setValue(title);
    console.log("LOG", title);
  };
  const onButtonPress = (value: string) => {
    props.filterAlbums(value);
  };
  return (
    <div>
      <div className="mainPageWrapper">
        <input placeholder="add album name" onChange={searchHandler}></input>
        <button onClick={() => onButtonPress(value)}>Search</button>
        <div className="pages">
          {pages.map((page) => (
            <span
              key={page}
              className={
                props.mainPageData.currentPage === page ? "currentPage" : "page"
              }
              onClick={() => {
                props.onPageChange(page);
              }}
            >
              {page}
            </span>
          ))}
        </div>

        <div className="imageGridStyle">
          {props.mainPageData.albums.map((album: albumsType) => (
            <div key={album.id} className="albumStyle">
              <div>
                <img src={album.thumbnailUrl} alt={album.title} />
                <span>
                  <h3>{album.title}</h3>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
