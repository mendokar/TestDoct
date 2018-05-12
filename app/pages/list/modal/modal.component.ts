import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ModalDialogParams } from 'nativescript-angular/directives/dialogs';
import { Page } from 'tns-core-modules/ui/page/page';
import { setString } from 'tns-core-modules/application-settings/application-settings';
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

	constructor(private _routEx:RouterExtensions,private _modal: ModalDialogParams,private page:Page) {
		this.page.on("loaded", (args)=>{
            (<any>args.object).backgroundColor="transparent"
        });
	 }

	ngOnInit() { }

	/**
	 * viewData
	 */
	public viewData(opcion) {
		setString("opcion",''+opcion);
		this._routEx.navigate(["viewData"])
		this._modal.closeCallback();
	}
}