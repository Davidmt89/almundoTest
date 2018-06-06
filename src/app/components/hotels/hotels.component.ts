import { Component, OnInit, Input, Output } from '@angular/core';
import { HotelsService, Hotels } from '../../services/hotels.service';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
})
export class HotelsComponent implements OnInit {

  hotels:Hotels[] = [];
  inputValue:string = null;
  checkValue:string = null;
  constructor(private _hotels:HotelsService) { }

  ngOnInit() {
    this._hotels.getAllHotels().subscribe(hotels =>{
      this.hotels = hotels;
    });
  }

  public searchHotels(inputValue:string){
   let searchHotels = [];
   this._hotels.getHotelsByName(inputValue).subscribe(hotels =>{
     searchHotels = hotels;
     this.hotels = searchHotels;
   });
  }

  public searchHotelsByStar(checkValue:string){
   let searchHotels = [];
   this._hotels.getHotelsByStar(checkValue).subscribe(hotels =>{
     searchHotels = hotels;
     this.hotels = searchHotels;
   });
  }
}
