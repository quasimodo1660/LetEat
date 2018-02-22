import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants:any;
  newRestaurant:any;
  displayForm=false


  constructor(
    private _httpService:HttpService,
    private _router:Router,
  ) { }

  ngOnInit() {
    this.getAllRestaurants();
  }
  getAllRestaurants(){
    this._httpService.getRestaurants().subscribe(data=>{
      this.restaurants=data;
    })
  }
  removeRestaurant(id){
    this._httpService.remove(id).subscribe(data=>{
      if(data['errors'])
        console.log(data)
      else
        this.getAllRestaurants();
    })
  }
  display(restaurant){
    this.displayForm=true;
  }
}
