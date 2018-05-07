import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppComponent } from "./app.component";

import { NavegateRouters, Routes } from "./app.routing";




@NgModule({
  declarations: [AppComponent, ...NavegateRouters],
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(Routes)],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule { }
