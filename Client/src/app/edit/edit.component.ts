import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  restaurant={};
  id:any;
  errors='';
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
    })
  }
  onSubmit(){
    this._httpService.update(this.id,this.restaurant).subscribe(data=>{
      if(data['errors']){
        this.errors=data['message'];
      }
      else if(data['code']=='11000'){
        this.errors="This restaurant is already registered."
      }
      else{
        this.restaurant={name:"",cuisine:""};
        this._router.navigate(['/home'])
      }
    })
  }
}
