import { createReducer, on } from "@ngrx/store";
import { loadHomeDoctorsSuccess,getDetailDoctorSuccess, getdoctorSchedulesSuccess, getExtraInforDoctorSuccess } from "./home-page.actions";
import { initialState } from "./home-page.state";

const _homePageReducer = createReducer(
    initialState,
    on(loadHomeDoctorsSuccess,(state,action)=>{
        return{
            ...state,
            doctors: action.data
        }
    }),
    on(getDetailDoctorSuccess,(state,action)=>{
        return{
            ...state,
            detailDoctor: action.data
        }
    }),
    on(getdoctorSchedulesSuccess,(state,action)=>{
        return{
            ...state,
            doctorSchedules: action.data
        }
    }),
    on(getExtraInforDoctorSuccess,(state,action)=>{
        return{
            ...state,
            extraInfor: action.data
        }
    }),
)

export function HomePageReducer(state,action){
    return _homePageReducer(state, action);
}