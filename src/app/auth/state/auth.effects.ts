import { loginStart, loginSuccess, autoLogin, autoLogout } from './auth.actions';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.handleLogin(action.email, action.password).pipe(
                    map((data) => {
                        if (data && data.errCode === 0) {
                            localStorage.setItem('dataInfo', JSON.stringify(data));
                            localStorage.setItem('isLoggedIn', 'true');
                        }
                        return loginSuccess({ data });
                    })
                )
            })
        )
    })

    loginRedirect$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                if (action != null || action != undefined) {
                    if (action.data.errCode === 0) {
                        if(action.data.user.roleId == 'R1'){
                            this.router.navigate(['/systems/user-ngrx'])
                        }
                        if(action.data.user.roleId == 'R2'){
                            this.router.navigate(['/systems/manage-schedule'])
                        }
                    }
                }

            })
        )
    }, { dispatch: false })

    autoLogin$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogin),
            mergeMap((action) => {
                const dataInfo = JSON.parse(localStorage.getItem('dataInfo'));
                if (dataInfo == null || dataInfo === undefined) {
                    return of(autoLogout())
                }
                return of(loginSuccess({ data: dataInfo }))
            })
        )
    })

    logout$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(autoLogout),
            map((action) => {
                localStorage.removeItem('dataInfo');
                localStorage.setItem('isLoggedIn', 'false');
                this.router.navigate(['/auth'])
            })
        )
    }, { dispatch: false })
}
