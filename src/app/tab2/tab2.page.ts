import { Component } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  categoryList = [];
  constructor(
    private categoryService: CategoryService,
    private router: Router
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

  onCardClick(id=1){
    this.router.navigate(['tabs','home',id])
  }

}
