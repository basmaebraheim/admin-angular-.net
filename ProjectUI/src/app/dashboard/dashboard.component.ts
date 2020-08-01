import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { RouteInfo, ROUTES } from './menu-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

   routesList: RouteInfo[] = ROUTES;
 
   

   constructor( private router: Router) { }

  ngOnInit(): void {
    
  }
  changeRoute(route:RouteInfo)
  {
    this.router.navigate([route.path]);

  }
  logout()
  {
    sessionStorage.removeItem('UserToken');
    sessionStorage.removeItem('currentUser');
    this.router.navigate(["auth"]);
  }

}
