import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logoUrl = "../../assets/logo.svg"
  winWidth = window.innerWidth > 768 ? true : false;
  navBarLinks : string[] = ["Home" , "Books" , "About" , "Contact Us"]
}