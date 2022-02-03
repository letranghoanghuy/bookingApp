import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manage-clinic',
  templateUrl: './manage-clinic.component.html',
  styleUrls: ['./manage-clinic.component.scss']
})
export class ManageClinicComponent implements OnInit {

  myForm: FormGroup;
  base64: any = null;

  constructor(private dataService: DataService,
    private toastr: ToastrService,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      image: new FormControl(''),
      description: new FormControl(''),
    })
  }

  async changeImg(event) {
    let data = event.target.files
    let file = data[0];

    this.base64 = await this.commonService.getBase64(file);
    this.myForm.patchValue({
      image: this.base64
    })

  }

  async onSubmit() {
    await this.dataService.addClinic(this.myForm.value).subscribe((data) => {
      if (data && data.errCode === 0) {
        this.myForm.reset();
        this.toastr.success('Add clinic successfully!', 'Success!');
        this.base64 = null;
      }
    })
  }

}
