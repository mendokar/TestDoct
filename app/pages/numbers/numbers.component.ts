import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'numbers',
	templateUrl: './pages/numbers/numbers.component.html',
	styleUrls: ['./pages/numbers/numbers.component.css']
})

export class NumbersComponent implements OnInit {

	constructor(private _routEx:RouterExtensions) { }

	ngOnInit() { }

	arregloNumber = [
		{
			number:"1",
			letter:"A",
			numbers:"5"
		},
		{
			number:"1",
			letter:"A",
			numbers:"5"
		},
		{
			number:"1",
			letter:"A",
			numbers:"5"
		},
		{
			number:"1",
			letter:"A",
			numbers:"5"
		},
		{
			number:"1",
			letter:"A",
			numbers:"5"
		}
	]

	/**
	 * viewList
	 */
	public viewList() {
		this._routEx.navigate(["list"])
	}
}