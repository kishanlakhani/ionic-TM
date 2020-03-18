import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router:ActivatedRoute
  ) { }

  ngOnInit() {
    this.router.paramMap.subscribe(param=>{
      console.log(param.get('id'));
    })
  }

}
