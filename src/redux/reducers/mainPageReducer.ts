
import {Dispatch} from "redux";
import {AppStateType} from '../redux-store';
import {InitialMainPageReducerStateType,ActionsTypes,setAlbumsDataACType,setCurrentPageACType,setFilteredAlbumsAcType,albumsType} from '../reducers/mainPageReducerTypes'
import axios from 'axios'
import {SET_ALBUMS_DATA,SET_CURRENT_PAGE,SET_FILTERED_ALBUMS} from './mainPageReducerTypes'


let initialState: InitialMainPageReducerStateType =  {
      
        albums:[
            {
    albumId: 1,
    id: 1,
    title: '',
    url:'',
    thumbnailUrl: '',
    
         }
         ],
    pageSize: 50,
    totalCount: 0,
    currentPage: 1,
    }




const mainPageReducer = (state: InitialMainPageReducerStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SET_ALBUMS_DATA:
            return {...state, albums: action.data }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_FILTERED_ALBUMS:
            return {
                    ...state,albums:[...state.albums.filter((album:albumsType)=> {
                        return album.title.toLowerCase().trim().indexOf(action.title.toLowerCase().trim())>= 0
                    
                    } )] }
        default :
            return state

    }

}

export const setAlbumsData = (data:InitialMainPageReducerStateType): setAlbumsDataACType => ({type: SET_ALBUMS_DATA, data})
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})
export const setFilteredAlbumsAC = (title:string): setFilteredAlbumsAcType => ({type: SET_FILTERED_ALBUMS, title})




export const getAlbumsDataThunk = (currentPage: number, pageSize: number) => {
   
    return (dispatch: Dispatch<ActionsTypes>, getState: AppStateType) => {
      
      axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${pageSize}`).then(response => {
            dispatch(setAlbumsData(response.data))
            dispatch(setCurrentPageAC(currentPage))
           
           
})
            .catch(error => console.log('ERROR',error));

    }
}

export default mainPageReducer

