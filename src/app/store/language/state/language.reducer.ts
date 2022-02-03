import { createReducer, on } from "@ngrx/store";
import { initialState } from "./language.state";
import { changeLanguage} from './language.actions';

const _changeLanguageReducer = createReducer(
    initialState,
    on(changeLanguage,(state,action) => {
        return {
            ...state,
            language:action.value
        }
    })
)

export function changeLanguageReducer(state,action) {
    return _changeLanguageReducer(state, action);
}