import {InitialMainPageReducerStateType,setAlbumsDataACType,setCurrentPageACType,setFilteredAlbumsAcType} from '../reducers/mainPageReducerTypes'
import {SET_ALBUMS_DATA,SET_CURRENT_PAGE,SET_FILTERED_ALBUMS} from '../reducers/mainPageReducerTypes'

export const setAlbumsData = (data:InitialMainPageReducerStateType): setAlbumsDataACType => ({type: SET_ALBUMS_DATA, data})
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setFilteredAlbumsAC = (title:string): setFilteredAlbumsAcType => ({type: SET_FILTERED_ALBUMS, title})

