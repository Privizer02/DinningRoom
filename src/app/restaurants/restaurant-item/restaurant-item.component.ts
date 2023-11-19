import { Component, Input } from '@angular/core';
import { RestaurantList } from 'src/app/Model/restaurant-list.model';
import { Restaurant } from 'src/app/Model/restaurant.model';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.css']
})
export class RestaurantItemComponent {
  @Input()
  restaurant:Restaurant = new Restaurant();


  restaurants: RestaurantList = new RestaurantList();


}
