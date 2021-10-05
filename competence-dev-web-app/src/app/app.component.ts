import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: './components/competence/competence.component.html',
  // styleUrls: ['./app.component.css']
  styleUrls: ['./components/competence/competence.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AMS Competence Web App';
  sideBarOpen = false;

  ngOnInit() {}

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
