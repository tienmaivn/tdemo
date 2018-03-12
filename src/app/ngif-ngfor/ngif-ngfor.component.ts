import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-ngfor',
  templateUrl: './ngif-ngfor.component.html',
  styleUrls: ['./ngif-ngfor.component.css']
})
export class NgifNgforComponent implements OnInit {
	isShow = true;

	arrSubjects = ['Item 1', 'Item 2', 'Item 3'];

  constructor() { }

  ngOnInit() {
  }

}
