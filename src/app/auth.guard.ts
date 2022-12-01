import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate():boolean{
      window.alert('DO NOT HAVE ACCESS TO DASHBOARD DIRECTLY PLEASE LOGIN FIRST!');
       this.router.navigate(['login']);
    return true;
  }
  
}