import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AppState } from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'BookingCare';
  lang = '';
  constructor(private translate: TranslateService, 
    private store: Store<AppState>) {
    // this.translate.setDefaultLang('vi');
  }

  ngOnInit(): void {
    this.store.select('language').subscribe((data) => {
      this.translate.use(data.language);
    })
    
  }

}
