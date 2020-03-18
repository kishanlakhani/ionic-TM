import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.page.html',
  styleUrls: ['./card-show.page.scss'],
})
export class CardShowPage implements OnInit {

  postList = [];
  categoryId = '';

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private postService:PostService
    
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      console.log(param.get('id'));
      this.categoryId = param.get('id');
      this.postService.getAllPost().subscribe(r=>{
        this.postList =  this.getAllPostWithCategory(param.get('id'),r);
        console.log(this.postList);
      })
    })
  }

  onGoToCategory(){
    this.router.navigate(['tabs','category'])
  }

  getAllPostWithCategory(categoryId,post){
    let postListTemp = [];
    for (const key in post) {
      if (post.hasOwnProperty(key) && post[key]['category'] == categoryId ){
        const element = post[key];
        postListTemp.push({key:key,...element});
      }
    }
    return postListTemp;
  }

  onPostCardClick(postId){
    this.router.navigate(['tabs','home','post',postId]);
  }
}
