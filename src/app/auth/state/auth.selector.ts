import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.state";

export const AUTH_STATE_NAME = 'auth';

const getResponseDataState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getResponseData = createSelector(getResponseDataState,(state)=>{   
    return state?.data
})

export const isAuthenticated = createSelector(getResponseDataState,(state)=>{
    let check:boolean;
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if(isLoggedIn == 'true' && state.data.errCode === 0){
        check = true;
    }
    if(isLoggedIn == 'false' || state.data == null || state.data == undefined) {
        check = false;
    }
    return check;
})

export const getUserInfo = createSelector(getResponseDataState,(state)=>{
    return state?.data.user
})

