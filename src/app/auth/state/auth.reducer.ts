import { createReducer, on } from "@ngrx/store";
import { loginSuccess,autoLogout } from "./auth.actions";
import { initialState } from "./auth.state";

const _authReducer = createReducer(
    initialState,
    on(loginSuccess,(state,action)=>{
        return{
            ...state,
            data: action.data
        }
    }),
    on(autoLogout, (state)=>{
        return{
            ...state,
            data: null
        }
    })
);

export function AuthReducer(state,action){
    return _authReducer(state,action);
}