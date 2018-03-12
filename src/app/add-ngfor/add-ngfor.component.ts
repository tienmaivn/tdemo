import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-add-ngfor',
	templateUrl: './add-ngfor.component.html',
	styleUrls: ['./add-ngfor.component.css']
})
export class AddNgforComponent implements OnInit {

	filterStatus = 'view_all';
	
	newDv = "";
	newOsv = "";
	newManu = "";
	showFormAdd = false;

	arrDevices = [
		{ id: 1, name: 'Galaxy S9', osv: 'Android 7.2', manu: 'Samsung Inc', memorized: true },
		{ id: 2, name: 'iPhone 7', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
		{ id: 3, name: 'iPhone x', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
		{ id: 4, name: 'iPad pro', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true },
		{ id: 5, name: 'Iphone 7 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: false },
		{ id: 6, name: 'Iphone 8 Plus', osv: 'IOS 11.2', manu: 'Apple Inc', memorized: true }
	];

	constructor() { }

	ngOnInit() {
	}

	addDevice() {
		this.arrDevices.unshift ({
			id: this.arrDevices.length + 1,
			name: this.newDv,
			osv: this.newOsv,
			manu: this.newManu,
			memorized: true
		})
		this.newDv ="",
		this.newOsv = "",
		this.newOsv = "",
		this.showFormAdd = false
	}
	deleteDevice(id: number) {
		const index = this.arrDevices.findIndex(device => device.id === id);
		this.arrDevices.splice(index, 1);
	}
}
