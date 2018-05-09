"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var page_1 = require("tns-core-modules/ui/page/page");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var ModalComponent = /** @class */ (function () {
    function ModalComponent(_routEx, _modal, page) {
        this._routEx = _routEx;
        this._modal = _modal;
        this.page = page;
        this.page.on("loaded", function (args) {
            args.object.backgroundColor = "transparent";
        });
    }
    ModalComponent.prototype.ngOnInit = function () { };
    /**
     * viewData
     */
    ModalComponent.prototype.viewData = function () {
        this._routEx.navigate(["viewData"]);
        this._modal.closeCallback();
    };
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'modal',
            templateUrl: './pages/list/modal/modal.component.html',
            styleUrls: ['./pages/list/modal/modal.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, dialogs_1.ModalDialogParams, page_1.Page])
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxtRUFBNEU7QUFDNUUsc0RBQXFEO0FBQ3JELDBEQUEwRDtBQUMxRCw0Q0FBNEM7QUFDNUMsOENBQThDO0FBQzlDLG1EQUFtRDtBQVFuRDtJQUVDLHdCQUFvQixPQUF3QixFQUFTLE1BQXlCLEVBQVMsSUFBUztRQUE1RSxZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBSztRQUMvRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxJQUFJO1lBQ1osSUFBSSxDQUFDLE1BQU8sQ0FBQyxlQUFlLEdBQUMsYUFBYSxDQUFBO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVGLGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQ7O09BRUc7SUFDSSxpQ0FBUSxHQUFmO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1FBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWhCVyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO1NBQ3JELENBQUM7eUNBSTJCLHlCQUFnQixFQUFpQiwyQkFBaUIsRUFBYyxXQUFJO09BRnBGLGNBQWMsQ0FpQjFCO0lBQUQscUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ21vZGFsJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL2xpc3QvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy9saXN0L21vZGFsL21vZGFsLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0RXg6Um91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIF9tb2RhbDogTW9kYWxEaWFsb2dQYXJhbXMscHJpdmF0ZSBwYWdlOlBhZ2UpIHtcblx0XHR0aGlzLnBhZ2Uub24oXCJsb2FkZWRcIiwgKGFyZ3MpPT57XG4gICAgICAgICAgICAoPGFueT5hcmdzLm9iamVjdCkuYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIlxuICAgICAgICB9KTtcblx0IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdC8qKlxuXHQgKiB2aWV3RGF0YVxuXHQgKi9cblx0cHVibGljIHZpZXdEYXRhKCkge1xuXHRcdHRoaXMuX3JvdXRFeC5uYXZpZ2F0ZShbXCJ2aWV3RGF0YVwiXSlcblx0XHR0aGlzLl9tb2RhbC5jbG9zZUNhbGxiYWNrKCk7XG5cdH1cbn0iXX0=