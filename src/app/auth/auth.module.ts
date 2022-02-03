import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { AuthEffects } from "./state/auth.effects";
import { AuthReducer } from "./state/auth.reducer";
import { AUTH_STATE_NAME } from "./state/auth.selector";

const routes: Routes =[
    {path: '', children:[
        {path: '',redirectTo:'login'},
        {path: 'login',component: LoginComponent}
    ]}
]

@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),
        EffectsModule.forFeature()
    ]
})
export class AuthModule {}