import { Component } from "@angular/core";
import * as _firebase from "nativescript-plugin-firebase";
import { Page } from "tns-core-modules/ui/page/page";

import { registerElement } from "nativescript-angular/element-registry";
import { Gif } from "nativescript-gif";
registerElement("Gif", () => Gif);


@Component({
  selector: "my-app",
  template: `<page-router-outlet></page-router-outlet>`
})
export class AppComponent {
  // Your TypeScript logic goes here

  constructor(private _page:Page){
    this._page.actionBarHidden = true;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    _firebase.init({
            // Optionally pass in properties for database, authentication and cloud messaging,
            // see their respective docs.
        }).then(
            (instance) => {
                console.log("firebase.init done");
                //alert("firebase.init done"+instance)
            },
            (error) => {
                console.log("firebase.init error: " + error);
                //alert("firebase.init error: " + error)
            }
        );
  }

}
