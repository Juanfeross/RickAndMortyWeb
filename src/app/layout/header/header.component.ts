import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private dropdownNavbar = document.getElementById("myTopnav");

  constructor() { }

  ngOnInit(): void {
  }

  public dropdownMenu(){
    if (this.dropdownNavbar?.className === "topnav") {
      this.dropdownNavbar.className += "responsive";
    }
  }

  public getDropdownMenu() {
    this.dropdownMenu;
  }
}

