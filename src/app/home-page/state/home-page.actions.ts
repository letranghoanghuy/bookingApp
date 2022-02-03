import { createAction, props } from '@ngrx/store';

export const LOAD_HOME_DOCTORS = '[home page] load home doctors';
export const LOAD_HOME_DOCTORS_SUCCESS = '[home page] load home doctors success';

export const GET_DETAIL_DOCTOR = 'get detail doctor';
export const GET_DETAIL_DOCTOR_SUCCESS = 'get detail doctor success';

export const GET_DOCTOR_SCHEDULE = 'get doctor schedule';
export const GET_DOCTOR_SCHEDULE_SUCCESS = 'get doctor schedule success';

export const GET_EXTRA_INFOR_DOCTOR = 'get extra infor doctor';
export const GET_EXTRA_INFOR_DOCTOR_SUCCESS = 'get extra infor doctor success';

export const loadHomeDoctors = createAction(
    LOAD_HOME_DOCTORS,
    props<{limit:number}>()
)
export const loadHomeDoctorsSuccess = createAction(
    LOAD_HOME_DOCTORS_SUCCESS,
    props<{data:any}>()
)
export const getDetailDoctor = createAction(
    GET_DETAIL_DOCTOR,
    props<{id:number}>()
)
export const getDetailDoctorSuccess = createAction(
    GET_DETAIL_DOCTOR_SUCCESS,
    props<{data:any}>()
)
export const getdoctorSchedules = createAction(
    GET_DOCTOR_SCHEDULE,
    props<{id:number,date:string}>()
)
export const getdoctorSchedulesSuccess = createAction(
    GET_DOCTOR_SCHEDULE_SUCCESS,
    props<{data:any}>()
)
export const getExtraInforDoctor = createAction(
    GET_EXTRA_INFOR_DOCTOR,
    props<{inputId:any}>()
)
export const getExtraInforDoctorSuccess = createAction(
    GET_EXTRA_INFOR_DOCTOR_SUCCESS,
    props<{data:any}>()
)
