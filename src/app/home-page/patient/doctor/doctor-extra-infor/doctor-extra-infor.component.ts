import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getExtraInforDoctor } from 'src/app/home-page/state/home-page.actions';
import { getExtraInfor } from 'src/app/home-page/state/home-page.selector';
import { DataService } from 'src/app/services/data.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-doctor-extra-infor',
  templateUrl: './doctor-extra-infor.component.html',
  styleUrls: ['./doctor-extra-infor.component.scss']
})
export class DoctorExtraInforComponent implements OnInit {
  @Input() doctorId
  isShowDetail = false;
  extraInfor: any;

  constructor(private store: Store<AppState>, private dataService: DataService) { }

  ngOnInit(): void {
    // this.store.dispatch(getExtraInforDoctor({inputId:this.doctorId}))
    // this.store.select(getExtraInfor).subscribe((data) =>{
    //   if(data && data.errCode === 0){
    //     this.extraInfor = data.data;
    //   }
    // })
    this.getData();
  }

  async getData() {
    await this.dataService.getExtraInfor(this.doctorId).subscribe((data) => {
      if (data && data.errCode === 0) {
        this.extraInfor = data.data;
      }
    })
  }

}
