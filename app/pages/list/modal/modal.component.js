"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var page_1 = require("tns-core-modules/ui/page/page");
var application_settings_1 = require("tns-core-modules/application-settings/application-settings");
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
    ModalComponent.prototype.viewData = function (opcion) {
        application_settings_1.setString("opcion", '' + opcion);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxtRUFBNEU7QUFDNUUsc0RBQXFEO0FBQ3JELG1HQUF1RjtBQUN2RiwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFRbkQ7SUFFQyx3QkFBb0IsT0FBd0IsRUFBUyxNQUF5QixFQUFTLElBQVM7UUFBNUUsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQUs7UUFDL0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsSUFBSTtZQUNaLElBQUksQ0FBQyxNQUFPLENBQUMsZUFBZSxHQUFDLGFBQWEsQ0FBQTtRQUNwRCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRixpQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkOztPQUVHO0lBQ0ksaUNBQVEsR0FBZixVQUFnQixNQUFNO1FBQ3JCLGdDQUFTLENBQUMsUUFBUSxFQUFDLEVBQUUsR0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBakJXLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFdBQVcsRUFBRSx5Q0FBeUM7WUFDdEQsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7U0FDckQsQ0FBQzt5Q0FJMkIseUJBQWdCLEVBQWlCLDJCQUFpQixFQUFjLFdBQUk7T0FGcEYsY0FBYyxDQWtCMUI7SUFBRCxxQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3MnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IHNldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuLy9pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdtb2RhbCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9saXN0L21vZGFsL21vZGFsLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvbGlzdC9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSBfbW9kYWw6IE1vZGFsRGlhbG9nUGFyYW1zLHByaXZhdGUgcGFnZTpQYWdlKSB7XG5cdFx0dGhpcy5wYWdlLm9uKFwibG9hZGVkXCIsIChhcmdzKT0+e1xuICAgICAgICAgICAgKDxhbnk+YXJncy5vYmplY3QpLmJhY2tncm91bmRDb2xvcj1cInRyYW5zcGFyZW50XCJcbiAgICAgICAgfSk7XG5cdCB9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHQvKipcblx0ICogdmlld0RhdGFcblx0ICovXG5cdHB1YmxpYyB2aWV3RGF0YShvcGNpb24pIHtcblx0XHRzZXRTdHJpbmcoXCJvcGNpb25cIiwnJytvcGNpb24pO1xuXHRcdHRoaXMuX3JvdXRFeC5uYXZpZ2F0ZShbXCJ2aWV3RGF0YVwiXSlcblx0XHR0aGlzLl9tb2RhbC5jbG9zZUNhbGxiYWNrKCk7XG5cdH1cbn0iXX0=