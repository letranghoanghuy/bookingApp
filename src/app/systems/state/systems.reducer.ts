import { createReducer, on } from "@ngrx/store";
import { loadTypeSuccess, addUserSuccess, getUserSuccess, deleteUserSuccess, updateUserSuccess, getAllDoctorsSuccess, addDoctorInfor, addScheduleSuccess } from "./systems.actions";
import { initialState } from "./systems.state";

const _systemsReducer = createReducer(
    initialState,
    on(loadTypeSuccess, (state, action) => {
        for (let i = 0; i < action.data.data.length; i++) {
            switch (action.data.data[i].type) {
                case 'GENDER':
                    return {
                        ...state,
                        genders: action.data.data
                    }
                case 'POSITION':
                    return {
                        ...state,
                        positions: action.data.data
                    }
                case 'ROLE':
                    return {
                        ...state,
                        roles: action.data.data
                    }
                case 'TIME':
                    return {
                        ...state,
                        times: action.data.data
                    }
                case 'PRICE':
                    return {
                        ...state,
                        prices: action.data.data
                    }
                case 'PAYMENT':
                    return {
                        ...state,
                        payments: action.data.data
                    }
                case 'PROVINCE':
                    return {
                        ...state,
                        provinces: action.data.data
                    }
            }
        }

        return {
            ...state,
        }
    }),
    on(addUserSuccess, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),
    on(getUserSuccess, (state, action) => {
        return {
            ...state,
            users: action.data
        }
    }),
    on(deleteUserSuccess, (state, { id }) => {
        for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].id == id) {
                state.users.splice(i, 1)
            }
        }
        return {
            ...state,
            users: state.users,
        }
    }),
    on(updateUserSuccess, (state, action) => {
        let updateUser;
        for (let i = 0; i < state.users.length; i++) {
            if (state.users[i].id == action.user.id) {
                updateUser = action.user
            } else {
                updateUser = state.users[i]
            }
        }
        return {
            ...state,
            users: updateUser
        }
    }),
    on(getAllDoctorsSuccess, (state, action) => {
        return {
            ...state,
            doctors: action.data
        }
    }),
    on(addDoctorInfor, (state, action) => {
        return {
            ...state,
            doctorsInfo: action.data
        }
    }),
    on(addScheduleSuccess, (state, action) => {
        return {
            ...state,
            schedules: action.data
        }
    }),
)

export function SystemsReducer(state, action) {
    return _systemsReducer(state, action);
}