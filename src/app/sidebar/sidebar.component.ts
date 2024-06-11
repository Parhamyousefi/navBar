import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  logoUrl = "../../assets/logo.svg"
  winWidth = window.innerWidth
  courseList : string[] = ["Math" , "Science" , "Physics" , "Chemical" , "Art"]
}
