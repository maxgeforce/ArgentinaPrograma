import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  listaTrabajos=["puerto leche", "batagey"];
  constructor(private mainService:MainService) { }
  userData:any;
  ngOnInit(): void {
    this.userData=this.mainService.getData();
  }

}
