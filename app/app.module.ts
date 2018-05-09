import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";

import { NavegateRouters, Routes } from "./app.routing";
import { ModalComponent } from "~/pages/list/modal/modal.component";




@NgModule({
  declarations: [AppComponent, ...NavegateRouters,ModalComponent],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent],
  imports: [NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(Routes)],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
