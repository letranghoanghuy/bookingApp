import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TranslateModule } from "@ngx-translate/core";
import { ManageUserComponent } from "./manage-user/manage-user.component";
import { SystemsEffects } from "./state/systems.effects";
import { SystemsReducer } from "./state/systems.reducer";
import { SYSTEMS_STATE_NAME } from "./state/systems.selector";
import { SystemHeaderComponent } from "./system-header/system-header.component";
import { UserNgrxComponent } from './user-ngrx/user-ngrx.component';
import { ManageDoctorComponent } from './manage-doctor/manage-doctor.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { ManageScheduleComponent } from './manage-schedule/manage-schedule.component';
import { ManageSpecialtyComponent } from './manage-specialty/manage-specialty.component';
import { ManageClinicComponent } from './manage-clinic/manage-clinic.component';
import { ManagePatientComponent } from './manage-patient/manage-patient.component';


const routes: Routes = [
    { path:'',children: [
        { path: '',redirectTo:'user-ngrx'},
        { path:'user-ngrx',component: UserNgrxComponent},
        { path: 'manage-user', component: ManageUserComponent },
        { path:'manage-doctor',component: ManageDoctorComponent},
        { path:'manage-schedule',component: ManageScheduleComponent},
        { path:'manage-specialty',component: ManageSpecialtyComponent},
        { path:'manage-clinic',component: ManageClinicComponent},
        { path:'manage-patient',component: ManagePatientComponent}
    ]}
]

@NgModule({
    declarations: [
        ManageUserComponent,
        UserNgrxComponent,
        SystemHeaderComponent,
        ManageDoctorComponent,
        ManageScheduleComponent,
        ManageSpecialtyComponent,
        ManageClinicComponent,
        ManagePatientComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        EffectsModule.forFeature([SystemsEffects]),
        StoreModule.forFeature(SYSTEMS_STATE_NAME, SystemsReducer),
        NgSelectModule,
        CKEditorModule
    ]
})
export class SystemsModule {}