import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from"redux-thunk"
import mainPageReducer from '../redux/reducers/mainPageReducer'

const rootReducer = combineReducers({
    mainPage: mainPageReducer,
    
})
export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));


export type AppStateType = ReturnType<typeof rootReducer>