import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggeado:boolean;
  constructor() { }

  logearse(){
    this.loggeado=true;
  }
}
