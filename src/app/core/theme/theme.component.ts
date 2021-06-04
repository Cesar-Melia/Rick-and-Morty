import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   const initialTheme: any = localStorage.getItem('theme');
  //   document.body.setAttribute('data-theme', initialTheme ? initialTheme: 'dark')
  }

  // changeTheme() {

  // }

}
