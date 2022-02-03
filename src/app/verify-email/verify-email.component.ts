import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  isVerify = false;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    if (location && location.search) {
      let url = new URLSearchParams(location.search);
      let token = url.get('token');
      let doctorId = url.get('doctorId')
      let data = {
        token: token,
        doctorId: doctorId
      }
      await this.dataService.verifyEmail(data).subscribe((data)=>{
        if(data && data.errCode === 0){
          this.isVerify = true;
        }
      })
    }
    
  }

}
