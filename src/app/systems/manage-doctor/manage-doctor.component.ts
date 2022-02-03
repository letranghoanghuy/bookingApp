import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';
import { AppState } from 'src/app/store/app.state';
import { addDoctorInfor, getAllDoctors, loadType } from '../state/systems.actions';
import { getAllDoctor, getdoctorInfor, getPayment, getPrice, getProvince } from '../state/systems.selector';

@Component({
  selector: 'app-manage-doctor',
  templateUrl: './manage-doctor.component.html',
  styleUrls: ['./manage-doctor.component.scss']
})
export class ManageDoctorComponent implements OnInit {

  inforForm: FormGroup;
  doctors=[];
  prices = [];
  payments = [];
  provinces = [];
  specialties = [];
  clinics = [];

  constructor(private store: Store<AppState>,private toastr: ToastrService,private dataService: DataService) {}
  
  ngOnInit(): void {
    this.inforForm = new FormGroup({
      contentHTML: new FormControl(''),
      description: new FormControl(''),
      doctorId: new FormControl(''),
      priceId: new FormControl(''),
      provinceId: new FormControl(''),
      paymentId: new FormControl(''),
      nameClinic: new FormControl(''),
      addressClinic: new FormControl(''),
      note: new FormControl(''),
      specialtyId: new FormControl(''),
      clinicId: new FormControl(''),
    })
    this.store.dispatch(getAllDoctors());
    this.store.select(getAllDoctor).subscribe((data)=>{
      if(data && data.errCode == 0){
        this.doctors = data.data
      }
    })
    this.getPrices();
    this.getPayments();
    this.getProvinces();
    this.getAllSpecialty();
    this.getAllClinic();
  }

  async getPrices() {
    this.store.dispatch(loadType({ typeInput: 'PRICE' }));
    this.store.select(getPrice).subscribe((data) => {
      this.prices = data
    })
  }
  getPayments() {
    this.store.dispatch(loadType({ typeInput: 'PAYMENT' }));
    this.store.select(getPayment).subscribe((data) => {
      this.payments = data
    })
  }
  getProvinces() {
    this.store.dispatch(loadType({ typeInput: 'PROVINCE' }));
    this.store.select(getProvince).subscribe((data) => {
      this.provinces = data
    })
  }
  async getAllSpecialty(){
    await this.dataService.getAllSpecialty().subscribe((data) => {
      if(data && data.errCode === 0){
        this.specialties = data.data;
      }
    })
  }

  async getAllClinic(){
    await this.dataService.getAllClinic().subscribe((data)=>{
      if(data && data.errCode === 0){
        this.clinics = data.data;
      }
    })
  }

  onSubmit() {
    this.store.dispatch(addDoctorInfor({data:this.inforForm.value}));
    if(this.inforForm.valid){
      this.inforForm.reset();
      this.toastr.success('Add doctor infor successfully!', 'Success!');
    }
  }

}
