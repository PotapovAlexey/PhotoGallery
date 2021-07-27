import React, { useState } from "react";
import styles from "./MainPage.module.css";
import {
  InitialMainPageReducerStateType,
  albumsType,
} from "../../redux/reducers/mainPageReducerTypes";
import "bootstrap/dist/css/bootstrap.css";
type PropsType = {
  mainPageData: InitialMainPageReducerStateType;
  onPageChange: (pageNumber: number) => void;
};

const MainPage = (props: PropsType) => {
  const pages = [];
  let pagesCount: number = Math.ceil(
    props.mainPageData.totalCount / props.mainPageData.pageSize
  );
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let [firstPages, setFirstPages] = useState({
    start: 0,
    end: 5,
  });
  let setNewPage = (page: number) => {
    if (page === firstPages.end) {
      setFirstPages({
        start: firstPages.end,
        end: firstPages.end + 5,
      });
    }
    if (page === firstPages.start + 1) {
      setFirstPages({
        start: firstPages.start - 5,
        end: firstPages.start,
      });
      if (page === 1) {
        setFirstPages({
          start: 0,
          end: 5,
        });
      }
    }
    props.onPageChange(page);
  };
  const [value, setValue] = useState("");
  const [filteredAlbums, setFilteredAlbums] = useState([]);
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let title = e.currentTarget.value;
    setValue(title);
  };
  const onButtonPress = (value: string) => {
    setFilteredAlbums(
      props.mainPageData.albums.filter((album: albumsType) =>
        album.title.toLowerCase().trim().includes(value.toLowerCase().trim())
          ? album
          : null
      )
    );
  };
  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.searchContainer}>
        <input placeholder="add album name" onChange={searchHandler}></input>
        <button onClick={() => onButtonPress(value)}>Search</button>
      </div>

      <div className={styles.pages}>
        {pages.slice(firstPages.start, firstPages.end).map((page) => (
          <span
            key={page}
            className={
              props.mainPageData.currentPage === page
                ? styles.currentPage
                : styles.page
            }
            onClick={() => {
              setNewPage(page);
            }}
          >
            {page}
          </span>
        ))}
      </div>

      <div className={styles.imageGridStyle}>
        {filteredAlbums.length > 0
          ? filteredAlbums.map((album: albumsType) => (
              <div key={album.id} className={styles.albumStyle}>
                <div>
                  <img src={album.url} alt={album.title} />
                  <span>
                    <h3>{album.title}</h3>
                  </span>
                </div>
              </div>
            ))
          : props.mainPageData.albums.map((album: albumsType) => (
              <div key={album.id} className={styles.albumStyle}>
                <div>
                  <img src={album.url} alt={album.title} />
                  <span>
                    <h3>{album.title}</h3>
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MainPage;

// <div className="container">
//   <div className="row">
//     <div className="col-sm">One of three columns</div>
//     <div className="col-sm">One of three columns</div>
//     <div className="col-sm">One of three columns</div>
//   </div>
// </div>;
