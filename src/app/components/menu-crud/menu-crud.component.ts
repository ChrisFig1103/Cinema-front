import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu-crud',
  templateUrl: './menu-crud.component.html',
  styleUrls: ['./menu-crud.component.css']
})

export class MenuCrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   logOut(){
    //this.authService.logout()
   }

}
