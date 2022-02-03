import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppState } from 'src/app/store/app.state';
import { loadHomeDoctors } from '../../state/home-page.actions';
import { getHomeDoctors } from '../../state/home-page.selector';

@Component({
  selector: 'app-out-standing-doctor',
  templateUrl: './out-standing-doctor.component.html',
  styleUrls: ['./out-standing-doctor.component.scss']
})
export class OutStandingDoctorComponent implements OnInit {
  @Input() customOptions?:OwlOptions;
  doctors;
  language: any;

  constructor(private store: Store<AppState>,private router:Router) { }

  ngOnInit(): void {
    this.store.dispatch(loadHomeDoctors({limit:10}));
    this.store.select('language').subscribe((data) => {
      this.language = data.language;
    })
    this.store.select(getHomeDoctors).subscribe((data)=>{
      let newData;
      newData = data;
      if(newData && newData.errCode == 0){
        let newArr = newData.data;
        this.doctors = newArr.map(item =>{
          const obj = {
            id:0,
            name:{
              nameVi:'',
              nameEn:''
            },
            image:''
          };
          obj.id = item.id;
          obj.name.nameVi = `${item.positionData.valueVi}, ${item.lastName} ${item.firstName}`;
          obj.name.nameEn = `${item.positionData.valueEn}, ${item.firstName} ${item.lastName}`;
          obj.image = new Buffer(item.image,'base64').toString('binary');
          return obj;
        })
      }
    })
  }

  showDetailDoctor(doctor){
    this.router.navigate(['/detail-doctor',doctor.id])
  }

}
