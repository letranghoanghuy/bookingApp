import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-clinic',
  templateUrl: './detail-clinic.component.html',
  styleUrls: ['./detail-clinic.component.scss']
})
export class DetailClinicComponent implements OnInit {

  id:any;
  doctor:any;
  detailClinic:any;

  constructor(private route: ActivatedRoute,private dataService:DataService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetailClinic(this.id);
  }

  async getDetailClinic(id:any){
    await this.dataService.getDetailClinic(id).subscribe((data)=>{
      if(data && data.errCode === 0){
        this.detailClinic = data.data;
        this.doctor = data.data.doctorClinic;
      }
    })
  }

  detail(id){
    this.router.navigate(['/detail-doctor',id])
  }

}
