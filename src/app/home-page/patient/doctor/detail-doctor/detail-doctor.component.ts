import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getDetailDoctor } from 'src/app/home-page/state/home-page.actions';
import { getDetailDoctorData } from 'src/app/home-page/state/home-page.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.component.html',
  styleUrls: ['./detail-doctor.component.scss']
})
export class DetailDoctorComponent implements OnInit {
  detailDoctor:any;
  id:any;
  avatar:any;
  nameVi: any;
  nameEn: any;
  language: any;

  constructor(private store: Store<AppState>,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.store.dispatch(getDetailDoctor({id: this.id}))
    this.store.select(getDetailDoctorData).subscribe((data) => {
      if(data && data.errCode === 0){
        this.detailDoctor = data.data;
        this.avatar = new Buffer(this.detailDoctor.image,'base64').toString('binary');
        this.nameVi = `${this.detailDoctor.positionData.valueVi}, ${this.detailDoctor.lastName} ${this.detailDoctor.firstName}`;
        this.nameEn = `${this.detailDoctor.positionData.valueEn}, ${this.detailDoctor.firstName} ${this.detailDoctor.lastName}`;
      }
    })
    this.store.select('language').subscribe((data) => {
      this.language = data.language;
    })
  }

}
