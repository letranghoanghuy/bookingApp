import { createFeatureSelector, createSelector } from "@ngrx/store";
import { HomePageState } from "./home-page.state";

export const HOME_PAGE_STATE_NAME = 'home-page';

const homePageState = createFeatureSelector<HomePageState>(HOME_PAGE_STATE_NAME);

export const getHomeDoctors = createSelector(homePageState,(state)=>{
    return state.doctors
})
export const getDetailDoctorData = createSelector(homePageState,(state)=>{
    return state.detailDoctor
})
export const getdoctorSchedule = createSelector(homePageState,(state)=>{
    return state.doctorSchedules
})
export const getExtraInfor = createSelector(homePageState,(state)=>{
    return state.extraInfor
})
