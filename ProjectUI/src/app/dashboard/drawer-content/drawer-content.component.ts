import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteInfo, ROUTES } from '../menu-items';

@Component({
  selector: 'app-drawer-content',
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.css']
})
export class DrawerContentComponent implements OnInit {
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
