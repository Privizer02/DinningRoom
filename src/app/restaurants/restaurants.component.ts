import { Component } from '@angular/core';
import { RestaurantService } from '../services/restaurant.service';
import { RestaurantList } from '../Model/restaurant-list.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent {
  restaurants: RestaurantList = new RestaurantList()

  params = {
    page:1,
    pageSize:12,
    sort:'rating',
    sortDirection:'desc'

  }

  constructor(private service: RestaurantService){

  }

  

  ngOnInit():void{
    this.service.readAll(this.params).subscribe({
      next:(data:RestaurantList) => {
        this.restaurants=data;
      }
    })
}

  }


