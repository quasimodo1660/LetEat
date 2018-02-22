import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http:HttpClient) { }
  getRestaurants(){
    return this._http.get('/restaurants');
  }
  addRestaurants(restaurant){
    return this._http.post('/restaurants',restaurant)
  }
  getOne(id){
    return this._http.get('/restaurants/'+id)
  }
  update(id,restaurant){
    return this._http.put('/restaurants/'+id,restaurant)
  }
  remove(id){
    return this._http.delete('/restaurants/'+id)
  }
  addReview(id,review){
    return this._http.post('/review/'+id,review)
  }
}
