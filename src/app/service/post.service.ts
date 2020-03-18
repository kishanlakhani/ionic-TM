import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postList= [];
  constructor(
    private http: HttpClient
  ) { }

  addPost(post) {
    this.http.post('https://ionic-tm.firebaseio.com/post.json', post).subscribe(r => {
      console.log(r);
    })
  }

  getAllPost() {
    return this.http.get('https://ionic-tm.firebaseio.com/post.json');
  }

  // getSinglePost(id) {
  //   this.postList = [];
  //   return this.getAllPost()
  //     .subscribe(r => {
  //       for (const key in r) {
  //         if (r.hasOwnProperty(key)) {
  //           if(key == id){
  //             return r[key];
  //           }
  //         }
  //       }
  //     });
  // }
}
