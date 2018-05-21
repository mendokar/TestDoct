import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ServiceFirebase } from '~/services/firebase.service';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
import { ModalDialogService } from 'nativescript-angular/modal-dialog';

import { setString, getString } from "application-settings"
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalComponent } from '~/pages/list/modal/modal.component';

@Component({
	selector: 'list',
	templateUrl: './pages/list/list.component.html',
	styleUrls: ['./pages/list/list.component.css']
})

export class ListComponent implements OnInit {


	_serviceFirebase: ServiceFirebase;
	_arregloExamples = [];
	_title;
	constructor(private _routEx: RouterExtensions, private vcRef: ViewContainerRef,
		private modal: ModalDialogService) {
		this._serviceFirebase = new ServiceFirebase();
	}

	ngOnInit() {
		this._title = getString("title");
		this.getData();
	}

	public getData() {
		this._serviceFirebase.searchData().then(response => {
			console.log("Respuesta Del Usuario" + JSON.stringify(response));
			let res = response.value["101"].items;
			for (let i = 0; i < res.length; i++) {
				//let id = i+1;
				//let description = res[i].description;

				let _id = res[i].id;
				let _title = res[i].title;
				let _image = res[i].image;
				let _gif = res[i].gif;
				let _video = res[i].video;
				let _name = res[i].name;
				let _description = res[i].description;

				this._arregloExamples.push({
					key: i,
					_id : res[i].id,
					_title : res[i].title,
					_image : res[i].image,
					_gif : res[i].gif,
					_video : res[i].video,
					_name : res[i].name,
					_description : res[i].description,
				})

			}
		});

	}

	public viewData(id) {
		setString("idData", '' + id)
		//

		this.mostrarMensaje();
	}

	/**
     * mostrarConfiguracionHorario
     */
	public mostrarMensaje() {

		//setString("verTuto", "true");

		//console.log(getString("verTuto"));

		let options = {
			context: {},
			fullscreen: false,
			viewContainerRef: this.vcRef
		};
		this.modal.showModal(ModalComponent, options).then(res => {

			if (res !== undefined) {

			}


		});
	}

	/**
	 * back
	 */
	public back() {
		this._routEx.back();
	}


}