import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantList } from '../Model/restaurant-list.model';
import { Observable, map } from 'rxjs';
import { query } from '@angular/animations';

const baseUrl = "http://localhost:3000/api/restaurants"

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient:HttpClient) { }


  readAll(params?:any):Observable<RestaurantList> {
    let queryParams = {};
    if(params) {
      queryParams= {
        params:new HttpParams().set('page',params.page)
        .set('pageSize',params.pageSize)
        .set('sort',params.sort)
        .set('sortDirection',params.sortDirection)
      }
    }
    
    return this.httpClient.get(baseUrl, queryParams).pipe(map((data:any) => {
      return new RestaurantList(data);
    }))
  }


}
