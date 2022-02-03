import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { autoLogout } from 'src/app/auth/state/auth.actions';
import { getUserInfo } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/store/app.state';
import { changeLanguage } from 'src/app/store/language/state/language.actions';

@Component({
  selector: 'app-system-header',
  templateUrl: './system-header.component.html',
  styleUrls: ['./system-header.component.scss']
})
export class SystemHeaderComponent implements OnInit {
  change=localStorage.getItem('language');
  userInfo:any;
  role:string;
  constructor(
    private store: Store<AppState>) {}

  ngOnInit(): void {
    if(this.change == null || this.change == ''){
      localStorage.setItem('language','vi');
      this.change = localStorage.getItem('language');
      this.store.dispatch(changeLanguage({value:this.change}))
    }else{
      this.store.dispatch(changeLanguage({value:this.change}))
    }

    this.store.select(getUserInfo).subscribe((users) => {
      this.userInfo = users
      this.role = this.userInfo.roleId
    })

  }

  changeLanguage(language: any){
    localStorage.setItem('language',language);
    this.change = localStorage.getItem('language');
    this.store.dispatch(changeLanguage({value:this.change}));
  }

  onLogout(event: Event){
    event.preventDefault();
    this.store.dispatch(autoLogout())
  }
}
