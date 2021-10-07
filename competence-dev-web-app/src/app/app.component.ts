import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AMS Competence Web App';
  sideBarOpen = false;

  ngOnInit() {}

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen;
  }
}
