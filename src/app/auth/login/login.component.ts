import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { autoLogin, loginStart } from '../state/auth.actions';
import { getResponseData } from '../state/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isShowPassword= false;
  response:any = {
    errCode:0,
    message:'',
    user:{}
  };

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required
      ])
    })
    this.store.dispatch(autoLogin())
  }

  showHide() {
    this.isShowPassword = !this.isShowPassword
  }
  onLogin(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(loginStart({email,password}))
    this.store.select(getResponseData).subscribe((data)=>{
      if(data && data.errCode !==0){
        this.response.message = data.message
      }
    });
    
  }
}
