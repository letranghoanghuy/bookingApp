import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-manage-specialty',
  templateUrl: './manage-specialty.component.html',
  styleUrls: ['./manage-specialty.component.scss']
})
export class ManageSpecialtyComponent implements OnInit {

  myForm: FormGroup;
  base64: any = null;

  constructor(private dataService: DataService,
    private toastr: ToastrService,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl(''),
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
    await this.dataService.addSpecialty(this.myForm.value).subscribe((data) => {
      if (data && data.errCode === 0) {
        this.myForm.reset();
        this.toastr.success('Add user successfully!', 'Success!');
        this.base64 = null;
      }
    })
  }

}
