import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page/page';
import { setString } from 'tns-core-modules/application-settings/application-settings';
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

	constructor(private _routEx:RouterExtensions,private page:Page) { 
		this.page.actionBarHidden = true;
	}

	ngOnInit() { }

	arregloNumber = [
		{
			number:"1",
			letter:"Australia",
			
		},
		{
			number:"2",
			letter:"Bengladesh",
			
		},
		{
			number:"3",
			letter:"Colombia",

		},
		{
			number:"4",
			letter:"Denmark",
			
		},
		{
			number:"5",
			letter:"England",

		},
		{
			number:"6",
			letter:"India",
			
		},
		{
			number:"7",
			letter:"Egypt",

		},
		{
			number:"8",
			letter:"USA",
			
		},
		{
			number:"9",
			letter:"Spain",

		}
	]

	/**
	 * viewList
	 */
	public viewList(title) {
		setString("title",''+title);
		this._routEx.navigate(["list"])
	}
}