import { ResponseData } from "src/app/models/ResponseData.model";

export interface AuthState{
    data: ResponseData | null;
}
export const initialState: AuthState = {
    data: null,
}