import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  categoryList=[];
  post = new FormGroup({
    title: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required)
 });
  constructor(
    private categoryService:CategoryService,
    private postService: PostService
  ) {
    this.getCategory();
  }

 
  getCategory() {
    this.categoryService.getAllCategory()
      .subscribe(r => {
        for (const key in r) {
          if (r.hasOwnProperty(key)) {
            const element = r[key];
            this.categoryList.push({ key: key, ...element });
          }
        }
      });
  }
   onFormSubmit() {
    console.log(this.post.value);  
    this.postService.addPost(this.post.value);
    this.post.reset();
  }
}
