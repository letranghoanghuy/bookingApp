import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { changeLanguage } from 'src/app/store/language/state/language.actions';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {
  
  change=localStorage.getItem('language');

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    if(this.change == null || this.change == ''){
      localStorage.setItem('language','vi');
      this.change = localStorage.getItem('language');
      this.store.dispatch(changeLanguage({value:this.change}))
    }else{
      this.store.dispatch(changeLanguage({value:this.change}))
    }
  }

  changeLanguage(language: any){
    localStorage.setItem('language',language);
    this.change = localStorage.getItem('language');
    this.store.dispatch(changeLanguage({value:this.change}));
  }
}
