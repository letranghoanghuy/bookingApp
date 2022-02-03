import { createAction, props } from '@ngrx/store';
import User from 'src/app/models/user.model';

export const LOAD_TYPE = '[system page] load type';
export const LOAD_TYPE_SUCCESS = '[system page] load type success';

export const ADD_USER_START = '[system page] add user start';
export const ADD_USER_SUCCESS = '[system page] add user success';

export const GET_USER_START = '[system page] get all user start';
export const GET_USER_SUCCESS = '[system page] get all user success';

export const DELETE_USER_START = '[system page] delete user start';
export const DELETE_USER_SUCCESS = '[system page] delete user success';

export const UPDATE_USER_START = '[system page] update user start';
export const UPDATE_USER_SUCCESS = '[system page] update user success';

export const GET_ALL_DOCTORS = '[system page] get all doctors';
export const GET_ALL_DOCTORS_SUCCESS = '[system page] get all doctors success';

export const ADD_DOCTOR_INFOR = '[system page] add doctor infor';
export const ADD_DOCTOR_INFOR_SUCCESS = '[system page] add doctor infor success';

export const ADD_SCHEDULE = '[system page] add schedule';
export const ADD_SCHEDULE_SUCCESS = '[system page] add schedule';

export const loadType = createAction(
    LOAD_TYPE,
    props<{typeInput: string;}>()
);
export const loadTypeSuccess = createAction(
    LOAD_TYPE_SUCCESS,
    props<{data: any}>()
);
export const addUserStart = createAction(
    ADD_USER_START,
    props<{user: User}>()
);
export const addUserSuccess = createAction(
    ADD_USER_SUCCESS,
    props<{user: User}>()
);
export const getUserStart = createAction(
    GET_USER_START,
    props<{inputId: string}>()
);
export const getUserSuccess = createAction(
    GET_USER_SUCCESS,
    props<{data: User[]}>()
);
export const deleteUserStart = createAction(
    DELETE_USER_START,
    props<{id: string}>()
);
export const deleteUserSuccess = createAction(
    DELETE_USER_SUCCESS,
    props<{id: string}>()
);
export const updateUserStart = createAction(
    UPDATE_USER_START,
    props<{user:User}>()
);
export const updateUserSuccess = createAction(
    UPDATE_USER_SUCCESS,
    props<{user:User}>()
);
export const getAllDoctors = createAction(GET_ALL_DOCTORS);
export const getAllDoctorsSuccess = createAction(
    GET_ALL_DOCTORS_SUCCESS,
    props<{data:any}>()
);
export const addDoctorInfor = createAction(
    ADD_DOCTOR_INFOR,
    props<{data:any}>()
);
export const addDoctorInforSuccess = createAction(
    ADD_DOCTOR_INFOR_SUCCESS,
    props<{data:any}>()
)
export const addSchedule = createAction(
    ADD_SCHEDULE,
    props<{data:any}>()
);
export const addScheduleSuccess = createAction(
    ADD_SCHEDULE_SUCCESS,
    props<{data:any}>()
)

