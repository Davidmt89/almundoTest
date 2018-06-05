import { Component, OnInit } from '@angular/core';
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private hotelsComponent:HotelsComponent) { }

  ngOnInit() {
  }

  searchHotel(){
    this.hotelsComponent.searchHotel('Radisson');
  }

}
