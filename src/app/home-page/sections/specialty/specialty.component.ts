import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.scss'],
})
export class SpecialtyComponent implements OnInit {
  @Input() customOptions?:OwlOptions;
  specialties = [];

  constructor(private dataService: DataService,private router:Router) { }

  ngOnInit(): void {
    this.getAllSpecialty();
  }

  async getAllSpecialty(){
    await this.dataService.getAllSpecialty().subscribe((data)=>{
      if(data && data.errCode === 0){
        this.specialties = data.data;
      }
    })
  }

  showDetailSpec(spec){
    this.router.navigate(['/detail-specialty',spec.id])
  }

}
