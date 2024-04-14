import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  
  redirectUrl:any = '';
  constructor(private auth: AuthService, private router :Router ,private activateRoute:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.redirectUrl = this.activateRoute.snapshot.queryParamMap.get('redirectUrl') || '/';
  }
  loginUser():void{
    this.auth.login().then(()=>{
      //this.router.navigate(['/']);
      this.router.navigateByUrl(this.redirectUrl);
    })
  }

}
