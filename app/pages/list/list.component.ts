import { Component, OnInit } from '@angular/core';
import { ServiceFirebase } from '~/services/firebase.service';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

import { setString} from "application-settings"
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'list',
	templateUrl: './pages/list/list.component.html',
	styleUrls: ['./pages/list/list.component.css']
})

export class ListComponent implements OnInit {


	_serviceFirebase: ServiceFirebase;
	_arregloExamples = [];
	constructor(private _routEx:RouterExtensions) { 
		this._serviceFirebase = new ServiceFirebase();
	}

	ngOnInit() {
		this.getData();
	 }

	public getData(){
		this._serviceFirebase.searchData().then(response => {
			console.log("Respuesta Del Usuario" + JSON.stringify(response));
			let res = response.value;
			for (let i = 0; i < res.length; i++) {
				let id = i+1;
				let description = res[i].description;

				this._arregloExamples.push({
					key:i,
					id:id,
					description:description
				})
				
			}
		});

	}

	public viewData(id){
		setString("idData",''+id)
		this._routEx.navigate(["viewData"])
	}
}