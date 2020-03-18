import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  sayHi(){
    console.log("hi")
  }

  getAllCategory(){
    return this.http.get('https://ionic-tm.firebaseio.com/category.json');
  }
}
