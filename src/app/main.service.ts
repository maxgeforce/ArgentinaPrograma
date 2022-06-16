import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getData(){
    let user:any={
      nombre:"Maximiliano Oscar Fernandez",
      fecha:"20/12/1991",
      city: "Mar Del Plata, Buenos Aires",
    }
    return user;
  }
}
