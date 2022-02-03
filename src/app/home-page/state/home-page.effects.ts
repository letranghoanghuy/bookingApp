import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, mergeMap, switchMap } from "rxjs/operators";
import { DataService } from "src/app/services/data.service";
import { getDetailDoctor, getDetailDoctorSuccess, getdoctorSchedules, getdoctorSchedulesSuccess, getExtraInforDoctor, getExtraInforDoctorSuccess, loadHomeDoctors,loadHomeDoctorsSuccess } from "./home-page.actions";

@Injectable()
export class HomePageEffects{
    constructor(private dataService: DataService,private actions$: Actions){}

    loadHomeDoctors$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadHomeDoctors),
            mergeMap((action) => {
                return this.dataService.getAllDoctorsHome(action.limit).pipe(
                    map((data) => {
                        return loadHomeDoctorsSuccess({ data})
                    })
                )
            })
        )
    })

    getDetailDoctor$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getDetailDoctor),
            mergeMap((action) => {
                return this.dataService.getDetailDoctor(action.id).pipe(
                    map((data) => {
                        return getDetailDoctorSuccess({ data})
                    })
                )
            })
        )
    })

    getdoctorSchedules$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getdoctorSchedules),
            mergeMap((action) => {
                return this.dataService.getSchedulesDoctor(action.id,action.date).pipe(
                    map((data) => {
                        return getdoctorSchedulesSuccess({ data})
                    })
                )
            })
        )
    })

    getExtraInforDoctor$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(getExtraInforDoctor),
            mergeMap((action) => {
                return this.dataService.getExtraInfor(action.inputId).pipe(
                    map((data) => {
                        return getExtraInforDoctorSuccess({ data})
                    })
                )
            })
        )
    })
}
