export interface HomePageState{
    doctors:[]
    detailDoctor:any,
    doctorSchedules:any,
    extraInfor:any,
}

export const initialState:HomePageState = {
    doctors:null,
    detailDoctor:null,
    doctorSchedules:null,
    extraInfor:null,
}