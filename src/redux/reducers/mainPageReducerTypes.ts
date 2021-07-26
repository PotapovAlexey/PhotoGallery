export const SET_ALBUMS_DATA='SET_ALBUMS_DATA'
export const SET_CURRENT_PAGE='SET_CURRENT_PAGE'
export const SET_FILTERED_ALBUMS='SET_FILTERED_ALBUMS'

export type albumsType = {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}

export type InitialMainPageReducerStateType ={
 albums: any,
 pageSize: number,
  totalCount: number,
  currentPage: number,
}

export type ActionsTypes =setAlbumsDataACType|setCurrentPageACType|setFilteredAlbumsAcType
 
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