import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-show',
  templateUrl: './post-show.page.html',
  styleUrls: ['./post-show.page.scss'],
})
export class PostShowPage implements OnInit {
  post={};
  constructor(
    private postService:PostService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param=>{
      console.log(param.get('id'));
      let id = param.get('id');
      this.postService.getAllPost()
        .subscribe(r=>{
          this.post  = { key:id,...r[id]};
          console.log(this.post)
        })
    })
  }

  onGoback(){
    this.router.navigate(['tabs','category'])
  }
}
