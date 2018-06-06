import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html'
})
export class HotelCardComponent implements OnInit {

  @Input() hotel:any = {};

  constructor() { }

  ngOnInit() {
  }

}
