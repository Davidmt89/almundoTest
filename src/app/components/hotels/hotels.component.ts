import { Component, OnInit } from '@angular/core';
import { HotelsService, Hotels } from '../../services/hotels.service';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
})
export class HotelsComponent implements OnInit {

  hotels:Hotels[] = [];
  constructor(private _hotels:HotelsService) { }

  ngOnInit() {
    this._hotels.getAllHotels().subscribe(hotels =>{
      this.hotels = hotels;
    });
  }

  searchHotel(hotelName:string){
    this._hotels.getHotelsByName(hotelName).subscribe(hotels =>{
      this.hotels = hotels;
    });
  }
}
