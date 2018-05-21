import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { Page } from 'tns-core-modules/ui/page/page';
import { setString, getString } from 'tns-core-modules/application-settings/application-settings';
import { ServiceFirebase } from '~/services/firebase.service';
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'modal',
	templateUrl: './pages/list/modal/modal.component.html',
	styleUrls: ['./pages/list/modal/modal.component.css']
})

export class ModalComponent implements OnInit {

	_viewGif: boolean;
	_titles: string;
	_viewImage: boolean;
	_gif: any;
	_image: any;
	idData: any;
	opcion: any;
	_serviceFirebase: ServiceFirebase;
	constructor(private _routEx:RouterExtensions,private _modal: ModalDialogParams,private page:Page) {
		this.page.on("loaded", (args)=>{
            (<any>args.object).backgroundColor="transparent"
		});

		
			this._serviceFirebase = new ServiceFirebase();
		
	 }

	ngOnInit() { }

	/**
	 * viewData
	 */
	public viewData(opcion) {
		setString("opcion",''+opcion);
		//this._routEx.navigate(["viewData"])
		//this._modal.closeCallback();

		this.opcion = getString("opcion");
		this.idData = getString("idData")
		this.getData();

		this._viewImage = false;
		this._viewGif = false;


	}


	

	public getData(){
		this._serviceFirebase.searchData().then(response => {
			console.log("Respuesta Del Usuario" + JSON.stringify(response));
			let res = response.value["101"].items;
			for (let i = 0; i < res.length; i++) {
				
				if(parseInt(this.idData) === i){
					
					this._image = res[i].image;
					this._gif = res[i].gif;
					
				}
			}

			if(this._image !== undefined && this.opcion === "image"){
				this._viewImage = true;
				this._titles = "View Image";
			}

			if(this._gif !== undefined && this.opcion === "gif"){
				this._viewGif = true;
				this._titles = "View Gif";
			}
		});
	}
}