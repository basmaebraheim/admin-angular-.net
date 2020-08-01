import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/dal/models/login';
import { AuthService } from 'src/app/dal/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
