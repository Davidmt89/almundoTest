import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  constructor(private hotelsComponent:HotelsComponent) { }

  @Output() public searchHotelsA = new EventEmitter<string>();
  @Output() public searchHotelsB = new EventEmitter<string>();
  inputValue:string = null;
  checkValue:string = null;
  filterList:string[] = ['5','4','3','2','1'];
  ngOnInit() {
  }

  public searchHotels(inputValue:string){
    this.searchHotelsA.emit(inputValue);
  }

  public searchHotelsByStar(checkValue:string){
    this.searchHotelsB.emit(checkValue);
  }

}
