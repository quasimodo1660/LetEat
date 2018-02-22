import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newRestaurant:any;
  errors='';

  constructor(
    private _httpService:HttpService,
    private _router:Router,
  ) { }

  ngOnInit() {
    this.newRestaurant={name:"",cuisine:""};
  }
  onSubmit(){
    this._httpService.addRestaurants(this.newRestaurant).subscribe(data=>{
      if(data['errors']){
        this.errors=data['message'];
      }
      else if(data['code']=='11000'){
        this.errors="This restaurant is already registered."
      }
      else{
        this.newRestaurant={name:"",cuisine:""};
        this._router.navigate(['/home'])
      }
    })
  }
}
