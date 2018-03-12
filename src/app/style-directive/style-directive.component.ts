import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-directive',
  templateUrl: './style-directive.component.html',
  styleUrls: ['./style-directive.component.css']
})
export class StyleDirectiveComponent implements OnInit {
	name = "";
	evenStyle = {color:'red', fontSize:'20px'};
	oddStyle = {color:'blue', fontSize:'30px'};
	isHightLight = true;
	currentClass = { circle: !this.isHightLight, square: this.isHightLight };

  constructor() { }

  ngOnInit() {
  }

}
