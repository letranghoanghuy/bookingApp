import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  users = [];
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
  }
  editState = {
    id: '',
    firstName: '',
    lastName: '',
    address: '',
  }

  submitted = false;
  editsubmitted = false;
  isAuthenticated:boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    await this.dataService.getAllUsers('ALL').subscribe(data => {
      this.users = data.users;
    })
  }

  checkValidatedInput = () => {
    let isValid = true;
    let arrInput = ['email', 'password', 'firstName', 'lastName', 'address']
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert('missing parameter: ' + arrInput[i]);
        break;
      }
    }
    return isValid;
  }
  checkValidatedInputEdit = () => {
    let isValid = true;
    let arrInput = ['firstName', 'lastName', 'address']
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.editState[arrInput[i]]) {
        isValid = false;
        alert('missing parameter: ' + arrInput[i]);
        break;
      }
    }
    return isValid;
  }

  newUser() {
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
    }
    this.submitted = false;
  }

  async editUser() {
    let isValid = this.checkValidatedInputEdit()
    if (isValid == true) {
      try {
        await this.dataService.editUser(this.editState).subscribe(data => {
          this.editState = {
            id: '',
            firstName: '',
            lastName: '',
            address: '',
          };
          this.editsubmitted = true;
          this.getAllUsers();
        })
      } catch (e) {
        console.log(e)
      }
    }
  }

  openEdit(user: any) {
    this.editState.id = user.id;
    this.editState.firstName = user.firstName;
    this.editState.lastName = user.lastName;
    this.editState.address = user.address;
    this.editsubmitted = false;
  }

  createUser = async () => {
    let isValid = this.checkValidatedInput()
    if (isValid == true) {
      try {
        await this.dataService.addUser(this.state).subscribe(data => {
          if (data && data.errCode !== 0) {
            alert(data.errMessage)
          } else {
            this.state = {
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              address: '',
            }
            this.submitted = true;
            this.getAllUsers();
          }
        })
      } catch (err) {
        console.log(err);
      }
    }
  }

  async deleteUser(user) {
    try {
      this.dataService.deleteUser(user.id).subscribe(data => {
        if (data && data.errCode === 0) {
          this.getAllUsers();
        } else {
          alert(data.errMessage)
        }
      })
    } catch (err) {
      console.log(err);
    }
  }
}
