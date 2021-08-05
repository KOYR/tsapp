import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { createHashHistory } from "history";
export const history = createHashHistory()

import loginState, { IloginState } from './Home/Login';
// import settingsState,  { IsettingsState } from './Home/Setting';

export interface IStore {
    loginState: IloginState
    // settingsState: IsettingsState,
}

export default combineReducers({
    loginState,
    // settingsState,
    router: connectRouter(history),
})

export function createReducer(asyncReducers: any) {
    return combineReducers({
        loginState,
        // settingsState,
        router: connectRouter(history),
        ...asyncReducers
    })
}