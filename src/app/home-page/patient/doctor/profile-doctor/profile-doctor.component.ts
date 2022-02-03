import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.scss'],
})
export class ProfileDoctorComponent implements OnInit, OnChanges {
  @Input() docid;
  @Input() timeData;
  @Input() ishow;
  @Input() date;

  detailDoctor: any;
  avatar: any;
  nameVi: any;
  nameEn: any;

  constructor(private store: Store<AppState>, private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    // this.store.dispatch(getDetailDoctor({id: this.docid}))
    // this.store.select(getDetailDoctorData).subscribe((data) => {
    //   if(data && data.errCode === 0){
    //     this.detailDoctor = data.data;
    //     this.avatar = new Buffer(this.detailDoctor.image,'base64').toString('binary');
    //     this.nameVi = `${this.detailDoctor.positionData.valueVi}, ${this.detailDoctor.lastName} ${this.detailDoctor.firstName}`;
    //     this.nameEn = `${this.detailDoctor.positionData.valueEn}, ${this.detailDoctor.firstName} ${this.detailDoctor.lastName}`;
    //   }
    // })
  }

  async ngOnChanges() {
    await this.dataService.getDetailDoctor(this.docid).subscribe((data) => {
      if (data && data.errCode === 0) {
        this.detailDoctor = data.data;
        this.avatar = new Buffer(this.detailDoctor.image, 'base64').toString('binary');
        this.nameVi = `${this.detailDoctor.positionData.valueVi}, ${this.detailDoctor.lastName} ${this.detailDoctor.firstName}`;
        this.nameEn = `${this.detailDoctor.positionData.valueEn}, ${this.detailDoctor.firstName} ${this.detailDoctor.lastName}`;
      }
    })
  }

}
