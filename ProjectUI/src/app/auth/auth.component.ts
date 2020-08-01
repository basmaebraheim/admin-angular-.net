import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../dal/models/login';
import { AuthService } from '../dal/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  hide:boolean = true;
  model: LoginModel;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.model = new LoginModel('', '');

  }
  login()
  {
    this.authService.login(this.model).subscribe(
      data => {
        this.router.navigate(['/users']);

      },
      err=>{console.log(err)}
    )
  }

}
