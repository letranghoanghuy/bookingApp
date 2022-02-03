import { Component, OnInit,Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hand-book',
  templateUrl: './hand-book.component.html',
  styleUrls: ['./hand-book.component.scss']
})
export class HandBookComponent implements OnInit {
  @Input() customOptions?:OwlOptions;

  constructor() { }

  ngOnInit(): void {
  }

}
