export const SET_ALBUMS_DATA='SET_ALBUMS_DATA'
export const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
export const SET_FILTERED_ALBUMS='SET_FILTERED_ALBUMS'
export const SET_ALBUM_ID='SET_ALBUM_ID'

export type albumsType = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
  
}

export type InitialMainPageReducerStateType ={
 albums:any              //   doesn't work  Array<albumsType>,
 pageSize: number,
  totalCount: number,
  currentPage: number,
  albumID:number
}


export type ActionsTypes =setAlbumsDataACType|setCurrentPageACType|setFilteredAlbumsAcType|setAlbumsIdAcType
 
export type setAlbumsDataACType={
  type:'SET_ALBUMS_DATA'
  data:InitialMainPageReducerStateType
}
export type setCurrentPageACType={
  type:'SET_CURRENT_PAGE'
  currentPage:number
}
export type setFilteredAlbumsAcType={
  type:'SET_FILTERED_ALBUMS'
  title:string
}
export type setAlbumsIdAcType={
  type:'SET_ALBUM_ID'
  albumId:number
}


