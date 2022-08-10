import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  listaTrabajos=["puerto leche", "batagey", "En la cola del Gc"];
  listaEstudios=["Universidad Tecnologica Nacional" , "Argentina Programa", "Introduccion a .Net Backend"]

  constructor(private mainService:MainService, public authService:AuthService) { }
  userData:any;
  ngOnInit(): void {
    this.userData=this.mainService.getData();    
  }

  removeExp(i:any){
      console.log("toco el "+i)
      
      this.listaTrabajos.splice(i, 1);
  }
}
