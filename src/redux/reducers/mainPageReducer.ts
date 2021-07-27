
import {Dispatch} from "redux";
import {AppStateType} from '../redux-store';
import {InitialMainPageReducerStateType,ActionsTypes} from '../reducers/mainPageReducerTypes'
import axios from 'axios'
import {SET_ALBUMS_DATA,SET_CURRENT_PAGE} from './mainPageReducerTypes'
import {setAlbumsData,setCurrentPageAC} from '../actions/actions'

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
    pageSize: 4,
    totalCount: 50,
    currentPage: 1,
    albumID:1
        }

const mainPageReducer = (state: InitialMainPageReducerStateType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case SET_ALBUMS_DATA:
            return {...state, albums: action.data }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default :
            return state

    }

}

////////////////Thunk
export const getAlbumsDataThunk = (currentPage: number, pageSize: number,albumId:number) => {
    return (dispatch: Dispatch<ActionsTypes>, getState: AppStateType) => { 
      axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_page=${currentPage}&_limit=${pageSize}`).then(response => {
            dispatch(setAlbumsData(response.data))
            dispatch(setCurrentPageAC(currentPage)) 
            console.log('albumId',albumId);
            
            console.log('RES',response.data);
            
}).catch(error => console.log('ERROR',error));
    }
}
/////////////




export default mainPageReducer

