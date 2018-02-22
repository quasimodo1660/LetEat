import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  restaurant={};
  id:any;
  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllRestaurant();
  } 
  getAllRestaurant(){
    this._httpService.getOne(this._route.params['value'].id).subscribe(data=>{
      console.log(data);
      this.restaurant=data[0];  
      this.id=data[0]._id;
      this.restaurant["review"].sort((a,b)=>b.stars-a.stars);
    })
  }
}
