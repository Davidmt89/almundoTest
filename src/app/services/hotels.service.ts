import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export class HotelsService {

  constructor(private http:HttpClient) { }

  getAllHotels(): Observable<Hotels[]> {
    return this.http.get<Hotels[]>('/routes/hotels/');
  }

  getHotelsByName(hotel: string): Observable<Hotels[]> {
    return this.http.get<Hotels[]>('/routes/hotels/'+ hotel);
  }

  getHotelsByStar(star: string): Observable<Hotels[]>{
    return this.http.get<Hotels[]>('/routes/hotels/filters/'+ star);
  }
}

export interface Hotels {
    id: string;
    image: string;
    name: string;
    price: number;
    stars: number;
    amenities: any[];
}
