import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TranslateModule } from "@ngx-translate/core";
import { CarouselModule } from "ngx-owl-carousel-o";
import { HomeFooterComponent } from "./home-footer/home-footer.component";
import { HomeHeaderComponent } from "./home-header/home-header.component";
import { HomePageComponent } from "./home-page.component";
import { AboutComponent } from "./sections/about/about.component";
import { HandBookComponent } from "./sections/hand-book/hand-book.component";
import { MedicalFacilityComponent } from "./sections/medical-facility/medical-facility.component";
import { OutStandingDoctorComponent } from "./sections/out-standing-doctor/out-standing-doctor.component";
import { SpecialtyComponent } from "./sections/specialty/specialty.component";
import { HomePageEffects } from "./state/home-page.effects";
import { HomePageReducer } from "./state/home-page.reducer";
import { HOME_PAGE_STATE_NAME } from "./state/home-page.selector";
import { DetailDoctorComponent } from './patient/doctor/detail-doctor/detail-doctor.component';
import { DoctorScheduleComponent } from './patient/doctor/doctor-schedule/doctor-schedule.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { DoctorExtraInforComponent } from './patient/doctor/doctor-extra-infor/doctor-extra-infor.component';
import { ProfileDoctorComponent } from './patient/doctor/profile-doctor/profile-doctor.component';
import { DetailSpecialtyComponent } from './patient/detail-specialty/detail-specialty.component';
import { DetailClinicComponent } from './patient/detail-clinic/detail-clinic.component';


const routes: Routes = [
    { path: '', children:[
        { path: '',redirectTo:'home'},
        { path: 'home',component:HomePageComponent},
    ]},
    { path:'detail-doctor/:id',component:DetailDoctorComponent},
    { path:'detail-specialty/:id',component:DetailSpecialtyComponent},
    { path:'detail-clinic/:id',component:DetailClinicComponent},
]

@NgModule({
    declarations: [
        HomePageComponent,
        HomeHeaderComponent,
        SpecialtyComponent,
        MedicalFacilityComponent,
        OutStandingDoctorComponent,
        HandBookComponent,
        AboutComponent,
        HomeFooterComponent,
        DetailDoctorComponent,
        DoctorScheduleComponent,
        DoctorExtraInforComponent,
        ProfileDoctorComponent,
        DetailSpecialtyComponent,
        DetailClinicComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        CarouselModule,
        EffectsModule.forFeature([HomePageEffects]),
        StoreModule.forFeature(HOME_PAGE_STATE_NAME, HomePageReducer),
        NgSelectModule,
    ]
})
export class HomePageModule { }