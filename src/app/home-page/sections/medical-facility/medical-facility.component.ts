import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-medical-facility',
  templateUrl: './medical-facility.component.html',
  styleUrls: ['./medical-facility.component.scss']
})
export class MedicalFacilityComponent implements OnInit {
  @Input() customOptions?:OwlOptions;
  clinics= [];

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit(): void {
    this.getAllClinic();
  }

  async getAllClinic(){
    await this.dataService.getAllClinic().subscribe((data)=>{
      if(data && data.errCode === 0){
        this.clinics = data.data;
      }
    })
  }

  showDetailSpec(spec){
    this.router.navigate(['/detail-clinic',spec.id])
  }

}
