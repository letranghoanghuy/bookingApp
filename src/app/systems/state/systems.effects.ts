import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";
import { DataService } from "src/app/services/data.service";
import { addDoctorInfor, addDoctorInforSuccess, addSchedule, addScheduleSuccess, addUserStart, addUserSuccess, deleteUserStart, deleteUserSuccess, getAllDoctors, getAllDoctorsSuccess, getUserStart, getUserSuccess, loadType, loadTypeSuccess, updateUserStart, updateUserSuccess } from "./systems.actions";

@Injectable()
export class SystemsEffects{

    constructor(private dataService: DataService,private actions$: Actions){}

    loadType$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(loadType),
            mergeMap((action)=>{
                return this.dataService.getAllCodeServices(action.typeInput).pipe(
                    map((data)=>{
                        return loadTypeSuccess({data})
                    })
                )
            })
        )
    })

    addUserStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addUserStart),
            exhaustMap((action) => {
                return this.dataService.addUser(action.user).pipe(
                    map((data) => {
                        return addUserSuccess({ user:data});
                    })
                )
            })
        )
    })

    getUserStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getUserStart),
            mergeMap((action) => {
                return this.dataService.getAllUsers(action.inputId).pipe(
                    map((data) => {
                        return getUserSuccess({ data})
                    })
                )
            })
        )
    })

    deleteUserStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteUserStart),
            switchMap((action) => {
                return this.dataService.deleteUser(action.id).pipe(
                    map((data) =>{
                        return deleteUserSuccess({id:action.id})
                    })
                )
            })
        )
    })

    updateUserStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateUserStart),
            switchMap((action)=>{
                return this.dataService.editUser(action.user).pipe(map((data)=>{
                    return updateUserSuccess({user:action.user})
                }))
            })
        )
    })

    getAllDoctors$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getAllDoctors),
            mergeMap((action) => {
                return this.dataService.getAllDoctors().pipe(
                    map((data) => {
                        return getAllDoctorsSuccess({ data})
                    })
                )
            })
        )
    })

    addDoctorInfor$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addDoctorInfor),
            exhaustMap((action) => {
                return this.dataService.saveDoctorsInfor(action.data).pipe(
                    map((data) => {
                        return addDoctorInforSuccess({data});
                    })
                )
            })
        )
    })
    addSchedule$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(addSchedule),
            exhaustMap((action) => {
                return this.dataService.addSchedule(action.data).pipe(
                    map((data) => {
                        return addScheduleSuccess({data});
                    })
                )
            })
        )
    })
}