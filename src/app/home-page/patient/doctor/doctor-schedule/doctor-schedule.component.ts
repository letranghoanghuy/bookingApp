import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { data } from 'jquery';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { getdoctorSchedules } from 'src/app/home-page/state/home-page.actions';
import { getDetailDoctorData, getdoctorSchedule } from 'src/app/home-page/state/home-page.selector';
import { DataService } from 'src/app/services/data.service';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.scss']
})
export class DoctorScheduleComponent implements OnInit {
  @Input() doctorId
  arrDate = [];
  date: string;
  times = [];

  detailDoctor: any;
  time: any;
  newTime: any;
  genders: any;

  bookingForm: FormGroup;
  constructor(private store: Store<AppState>, private dataService: DataService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    for (let i = 0; i < 7; i++) {
      let obj = {
        label: null,
        value: null
      };
      obj.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
      obj.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
      this.arrDate.push(obj);
    }
    // this.store.select(getDetailDoctorData).subscribe((data) => {
    //   if(data && data.errCode === 0){
    //     this.detailDoctor = data.data;
    //   }
    // })
    this.getData();
    this.createForm();
    this.getGenderData();
  }

  createForm() {
    this.bookingForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      date: new FormControl(''),
      gender: new FormControl('', [Validators.required]),
      doctorId: new FormControl(''),
      timeType: new FormControl(''),
      timeString: new FormControl(''),
      doctorName: new FormControl(''),
    })
  }

  async getData() {
    await this.dataService.getDetailDoctor(this.doctorId).subscribe((data) => {
      if (data && data.errCode === 0) {
        this.detailDoctor = data.data;
      }
    })
  }

  async getGenderData() {
    await this.dataService.getAllCodeServices('GENDER').subscribe((data) => {
      if (data && data.errCode === 0) {
        this.genders = data.data
      }
    })
  }

  dataChanged(newObj: string) {
    this.date = newObj;
    this.store.dispatch(getdoctorSchedules({ id: this.doctorId, date: this.date.toString() }))
    this.store.select(getdoctorSchedule).subscribe((data) => {
      if (data && data.errCode === 0) {
        this.times = data.data;
      }
    })
  }

  selected(time: any) {
    this.time = time;
    this.newTime = moment.unix(+time?.date / 1000).format('dddd - DD/MM/YYYY');
  }

  async onSubmit() {
    let time = `${this.time.timeTypeData.valueVi} - ${this.newTime}`
    let doctorName = `${this.detailDoctor?.lastName} ${this.detailDoctor?.firstName}`
    this.bookingForm.patchValue({
      date: moment(this.bookingForm.value.date).valueOf(),
      doctorId: this.doctorId,
      timeType: this.time.timeType,
      timeString: time,
      doctorName: doctorName
    })
    await this.dataService.addBooking(this.bookingForm.value).subscribe((data) => {
      if (data && data.errCode === 0) {
        this.bookingForm.reset();
        this.toastr.success("Đặt lịch thành công", "Thành công");
      }
    })
  }

}
