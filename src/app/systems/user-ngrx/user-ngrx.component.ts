import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Lightbox } from 'ngx-lightbox';
import User from 'src/app/models/user.model';
import { AppState } from 'src/app/store/app.state';
import { addUserStart, deleteUserStart, getUserStart, loadType, updateUserStart } from '../state/systems.actions';
import { getGenderData, getListUsers, getPositionData, getRoleData, getUserData } from '../state/systems.selector';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-user-ngrx',
  templateUrl: './user-ngrx.component.html',
  styleUrls: ['./user-ngrx.component.scss']
})
export class UserNgrxComponent implements OnInit {
  genders: any;
  positions: any;
  roles: any;
  language: any;
  img = [];
  imgThumb: any;
  addUserForm: FormGroup;
  errMessage: string;
  users = [];
  isEdit = false;
  base64:any = null;
  constructor(private store: Store<AppState>,
    private _lightbox: Lightbox,
    private sanitizer: DomSanitizer,
    private toastr: ToastrService,
    private commonService: CommonService) { }

  ngOnInit(): void {
    this.getGender();
    this.getPositions();
    this.getRoles();
    this.store.select('language').subscribe((data) => {
      this.language = data.language;
    })
    this.addUserForm = new FormGroup({
      id: new FormControl('', []),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.required
      ]),
      phoneNumber: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      roleId: new FormControl('', [
        Validators.required
      ]),
      positionId: new FormControl('', [
        Validators.required
      ]),
      image: new FormControl('', [])
    })
    this.getAllUsers();
  }

  getAllUsers() {
    let newData;
    this.store.dispatch(getUserStart({ inputId: 'ALL' }));
    this.store.select(getListUsers).subscribe((data) => {
      if (data && data.errCode === 0) {
        newData = data;
        this.users = newData.users;
      }
    })
  }

  getGender() {
    this.store.dispatch(loadType({ typeInput: 'GENDER' }));
    this.store.select(getGenderData).subscribe((data) => {
      this.genders = data
    })
  }

  getPositions() {
    this.store.dispatch(loadType({ typeInput: 'POSITION' }));
    this.store.select(getPositionData).subscribe((data) => {
      this.positions = data
    })
  }

  getRoles() {
    this.store.dispatch(loadType({ typeInput: 'ROLE' }));
    this.store.select(getRoleData).subscribe((data) => {
      this.roles = data
    })
  }

  async changeImg(event) {
    let data = event.target.files
    let file = data[0];

    this.base64 = await this.commonService.getBase64(file);
    this.addUserForm.patchValue({
      image:this.base64
    })
    let objectUrl = URL.createObjectURL(file)
    this.imgThumb = objectUrl
    let i = {
      src: this.sanitizer.bypassSecurityTrustUrl(objectUrl),
      caption: '',
      thumb: this.sanitizer.bypassSecurityTrustUrl(objectUrl)
    }
    this.img.push(i)
  }

  open(index: number): void {
    if (!this.img) return;
    // open lightbox
    this._lightbox.open(this.img, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  onSubmit() {
    if (this.isEdit) {
      this.store.dispatch(updateUserStart({ user: this.addUserForm.value }))
      this.isEdit = false;
      this.addUserForm.reset();
      this.toastr.success("Update user successfully", "Update");
      this.base64 = null;
      this.img=[];
      this.imgThumb='';
      this.getAllUsers();
    } else {
      this.store.dispatch(addUserStart({ user: this.addUserForm.value }))
      if (this.addUserForm.valid) {
        this.store.select(getUserData).subscribe((data) => {
          if (data && data.errCode !== 0) {
            this.errMessage = data.errMessage
          }
          if (data && data.errCode === 0) {
            this.addUserForm.reset();
            this.errMessage = '';
            this.toastr.success('Add user successfully!', 'Success!');
            this.base64 = null;
            this.img=[];
            this.imgThumb='';
            this.getAllUsers();
          }
        })
      }
    }
  }


  deleteUser(id: string) {
    if (confirm('Are you sure you want to delete this')) {
      this.store.dispatch(deleteUserStart({ id: id }))
      this.toastr.warning('Delete user successfully', 'Delete');
      this.getAllUsers()
    }
  }

  openEdit(user: User) {
    let img64 = '';
    if(user.image){
      img64 = new Buffer(user.image,'base64').toString('binary');
    }
    this.imgThumb=img64;
    let i = {
      src: this.sanitizer.bypassSecurityTrustUrl(img64),
      caption: '',
      thumb: this.sanitizer.bypassSecurityTrustUrl(img64)
    }
    this.img.push(i)

    this.isEdit = true;
    this.addUserForm.patchValue({
      id: user.id,
      email: user.email,
      password: ' ',
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
      roleId: user.roleId,
      positionId: user.positionId,
    
    })
  }

}
