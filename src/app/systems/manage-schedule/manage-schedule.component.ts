import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { AppState } from 'src/app/store/app.state';
import { addSchedule, getAllDoctors, loadType } from '../state/systems.actions';
import { getAllDoctor, getTimeData } from '../state/systems.selector';
import * as moment from 'moment';


@Component({
  selector: 'app-manage-schedule',
  templateUrl: './manage-schedule.component.html',
  styleUrls: ['./manage-schedule.component.scss']
})
export class ManageScheduleComponent implements OnInit {

  doctors = [];
  times = [];
  click = '';
  scheduleForm: FormGroup;
  result = [];

  constructor(private store: Store<AppState>, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.store.dispatch(getAllDoctors());
    this.store.select(getAllDoctor).subscribe((data) => {
      if (data && data.errCode == 0) {
        this.doctors = data.data
      }
    })

    this.store.dispatch(loadType({ typeInput: 'TIME' }));
    this.store.select(getTimeData).subscribe((data) => {
      if (data != null || data != undefined) {
        this.times = data.map(item => ({ ...item, isSelected: false }))
      }
    })
    this.createForm();

  }

  createForm() {
    this.scheduleForm = new FormGroup({
      doctorId: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      timeType: new FormControl('')
    })
  }

  getTimestamp(date) {
    var tp = Math.round(Date.parse(date) / 1000);
    return tp;
  }

  onSubmit() {
    this.result = []
    this.scheduleForm.patchValue({
      // date: this.getTimestamp(this.scheduleForm.value.date),
      date:moment(this.scheduleForm.value.date).valueOf()
    })
    for (let i = 0; i < this.times.length; i++) {
      if (this.times[i].isSelected === true) {
        this.scheduleForm.patchValue({
          timeType: this.times[i].keyMap
        })
        this.result.push(this.scheduleForm.value)
      }
    }
    let arrSchedule = {
      arrSchedule: this.result
    }
    this.store.dispatch(addSchedule({ data: arrSchedule }))
    this.scheduleForm.reset();
    this.toastr.success('Add schedule successfully!', 'Success!');

  }

}
