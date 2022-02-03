import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-detail-specialty',
  templateUrl: './detail-specialty.component.html',
  styleUrls: ['./detail-specialty.component.scss']
})
export class DetailSpecialtyComponent implements OnInit {
  id: any;
  doctorSpecialty: any;
  detailSpecialty: any;
  doctors = [];

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router, private store: Store<AppState>,) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getDetailSpecialty(this.id);
  }

  async getDetailSpecialty(id: any) {
    await this.dataService.getDetailSpecialty(id, 'ALL').subscribe((data) => {
      if (data && data.errCode === 0) {
        this.detailSpecialty = data.data;
        this.doctorSpecialty = data.data.doctorSpecialty;
      }
    })
  }

  detail(id) {
    this.router.navigate(['/detail-doctor', id])
  }

}
