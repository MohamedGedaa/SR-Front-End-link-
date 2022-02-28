import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public active : boolean = false;
  public hasMenu : boolean = false;
  public open : boolean = false ;
  constructor() { }

  ngOnInit(): void {
  }
  showMenu() {
    this.active =!this.active;
    this.hasMenu =!this.hasMenu;
    this.open =!this.open;
  }
  
}
