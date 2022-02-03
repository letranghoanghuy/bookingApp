import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SystemsState } from "./systems.state";

export const SYSTEMS_STATE_NAME = 'system';
 
const systemState = createFeatureSelector<SystemsState>(SYSTEMS_STATE_NAME);

export const getGenderData = createSelector(systemState,(state)=>{
    return state.genders
})
export const getPositionData = createSelector(systemState,(state)=>{
    return state.positions
})
export const getRoleData = createSelector(systemState,(state)=>{
    return state.roles
})
export const getTimeData = createSelector(systemState,(state)=>{
    return state.times
})
export const getUserData = createSelector(systemState,(state)=>{
    return state?.user
})
export const getListUsers = createSelector(systemState,(state)=>{
    return state.users
})
export const getAllDoctor = createSelector(systemState,(state)=>{
    return state.doctors
})
export const getdoctorInfor = createSelector(systemState,(state)=>{
    return state.doctorsInfo
})
export const getSchedules = createSelector(systemState,(state)=>{
    return state.schedules
})
export const getPrice = createSelector(systemState,(state)=>{
    return state.prices
})
export const getPayment = createSelector(systemState,(state)=>{
    return state.payments
})
export const getProvince = createSelector(systemState,(state)=>{
    return state.provinces
})