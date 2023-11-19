import { Restaurant } from "./restaurant.model";

export class RestaurantList {
  count:number;
  results:Restaurant[];

  constructor(obj?:any){
    this.count= obj && obj.results || 0;
    this.results = obj && obj.results && obj.results.map((i:any) => new Restaurant(i)) || [];
  }
}