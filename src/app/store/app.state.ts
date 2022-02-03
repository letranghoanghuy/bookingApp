import { changeLanguageReducer } from "./language/state/language.reducer";
import { LanguageState } from "./language/state/language.state";

export interface AppState{
    language: LanguageState
}

export const appReducer={
    language: changeLanguageReducer
}