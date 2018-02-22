import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  restaurant={};
  review={};
  id:any;
  errors='';
  
  constructor(
    private _httpService:HttpService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAllRestaurant();
    this.review={customer:"",stars:1,description:""};
  }
  getAllRestaurant(){
    this._httpService.getOne(this._route.params['value'].id).subscribe(data=>{
      console.log(data);
      this.restaurant=data[0];  
      this.id=data[0]._id;
    })
  }
  onSubmit(){
    this._httpService.addReview(this.id,this.review).subscribe(data=>{
      if(data['errors']){
        this.errors=data['message'];
      }
      else{
        this.review={reader:"",stars:1,note:""};
        this._router.navigate(['/review',this.id])
      }
    })
  }

}
