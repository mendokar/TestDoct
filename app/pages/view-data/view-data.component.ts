import { Component, OnInit } from '@angular/core';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import { getString } from "application-settings";
import { ServiceFirebase } from '~/services/firebase.service';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'view-data',
	templateUrl: './pages/view-data/view-data.component.html',
	styleUrls: ['./pages/view-data/view-data.component.css']
})

export class ViewDataComponent implements OnInit {

	_serviceFirebase: ServiceFirebase;
	idData;
	_title;
	_image;
	_description;
	constructor(private _routEx:RouterExtensions) { 
		this._serviceFirebase = new ServiceFirebase();
	}

	ngOnInit() {
		this.idData = getString("idData")
		this.getData();
	 }

	public getData(){
		this._serviceFirebase.searchData().then(response => {
			console.log("Respuesta Del Usuario" + JSON.stringify(response));
			let res = response.value;
			for (let i = 0; i < res.length; i++) {
				
				if(parseInt(this.idData) === i){
					this._title = res[i].title;
					this._image = res[i].image;
					this._description = res[i].description;
				}
			}
		});
	}


	/**
	 * getBack
	 */
	public getBack() {
		this._routEx.back();
	}
}