"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase_service_1 = require("~/services/firebase.service");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var modal_component_1 = require("~/pages/list/modal/modal.component");
var ListComponent = /** @class */ (function () {
    function ListComponent(_routEx, vcRef, modal) {
        this._routEx = _routEx;
        this.vcRef = vcRef;
        this.modal = modal;
        this._arregloExamples = [];
        this._serviceFirebase = new firebase_service_1.ServiceFirebase();
    }
    ListComponent.prototype.ngOnInit = function () {
        this._title = application_settings_1.getString("title");
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this._serviceFirebase.searchData().then(function (response) {
            console.log("Respuesta Del Usuario" + JSON.stringify(response));
            var res = response.value["101"].items;
            for (var i = 0; i < res.length; i++) {
                //let id = i+1;
                //let description = res[i].description;
                var _id = res[i].id;
                var _title = res[i].title;
                var _image = res[i].image;
                var _gif = res[i].gif;
                var _video = res[i].video;
                var _name = res[i].name;
                var _description = res[i].description;
                _this._arregloExamples.push({
                    key: i,
                    _id: res[i].id,
                    _title: res[i].title,
                    _image: res[i].image,
                    _gif: res[i].gif,
                    _video: res[i].video,
                    _name: res[i].name,
                    _description: res[i].description,
                });
            }
        });
    };
    ListComponent.prototype.viewData = function (id) {
        application_settings_1.setString("idData", '' + id);
        //
        this.mostrarMensaje();
    };
    /**
     * mostrarConfiguracionHorario
     */
    ListComponent.prototype.mostrarMensaje = function () {
        //setString("verTuto", "true");
        //console.log(getString("verTuto"));
        var options = {
            context: {},
            fullscreen: false,
            viewContainerRef: this.vcRef
        };
        this.modal.showModal(modal_component_1.ModalComponent, options).then(function (res) {
            if (res !== undefined) {
            }
        });
    };
    /**
     * back
     */
    ListComponent.prototype.back = function () {
        this._routEx.back();
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: './pages/list/list.component.html',
            styleUrls: ['./pages/list/list.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, core_1.ViewContainerRef,
            modal_dialog_1.ModalDialogService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSxnRUFBOEQ7QUFDOUQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELGtFQUF1RTtBQUV2RSw2REFBMkQ7QUFDM0Qsc0RBQStEO0FBQy9ELHNFQUFvRTtBQVFwRTtJQU1DLHVCQUFvQixPQUF5QixFQUFVLEtBQXVCLEVBQ3JFLEtBQXlCO1FBRGQsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNyRSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUhsQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFJckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQ0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sK0JBQU8sR0FBZDtRQUFBLGlCQThCQztRQTdCQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsZUFBZTtnQkFDZix1Q0FBdUM7Z0JBRXZDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQ3RCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7Z0JBRXRDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUM7b0JBQzFCLEdBQUcsRUFBRSxDQUFDO29CQUNOLEdBQUcsRUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDZixNQUFNLEVBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQ3JCLE1BQU0sRUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztvQkFDckIsSUFBSSxFQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO29CQUNqQixNQUFNLEVBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUs7b0JBQ3JCLEtBQUssRUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDbkIsWUFBWSxFQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO2lCQUNqQyxDQUFDLENBQUE7WUFFSCxDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDO0lBRU0sZ0NBQVEsR0FBZixVQUFnQixFQUFFO1FBQ2pCLGdDQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUM1QixFQUFFO1FBRUYsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7T0FFTTtJQUNDLHNDQUFjLEdBQXJCO1FBRUMsK0JBQStCO1FBRS9CLG9DQUFvQztRQUVwQyxJQUFJLE9BQU8sR0FBRztZQUNiLE9BQU8sRUFBRSxFQUFFO1lBQ1gsVUFBVSxFQUFFLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDNUIsQ0FBQztRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGdDQUFjLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUVyRCxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUV4QixDQUFDO1FBR0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSSw0QkFBSSxHQUFYO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBcEZXLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDOUMsQ0FBQzt5Q0FRNEIseUJBQWdCLEVBQWlCLHVCQUFnQjtZQUM5RCxpQ0FBa0I7T0FQdEIsYUFBYSxDQXVGekI7SUFBRCxvQkFBQztDQUFBLEFBdkZELElBdUZDO0FBdkZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZpY2VGaXJlYmFzZSB9IGZyb20gJ34vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuXG5pbXBvcnQgeyBzZXRTdHJpbmcsIGdldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnfi9wYWdlcy9saXN0L21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2xpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblx0X3NlcnZpY2VGaXJlYmFzZTogU2VydmljZUZpcmViYXNlO1xuXHRfYXJyZWdsb0V4YW1wbGVzID0gW107XG5cdF90aXRsZTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkge1xuXHRcdHRoaXMuX3NlcnZpY2VGaXJlYmFzZSA9IG5ldyBTZXJ2aWNlRmlyZWJhc2UoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMuX3RpdGxlID0gZ2V0U3RyaW5nKFwidGl0bGVcIik7XG5cdFx0dGhpcy5nZXREYXRhKCk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0RGF0YSgpIHtcblx0XHR0aGlzLl9zZXJ2aWNlRmlyZWJhc2Uuc2VhcmNoRGF0YSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJSZXNwdWVzdGEgRGVsIFVzdWFyaW9cIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG5cdFx0XHRsZXQgcmVzID0gcmVzcG9uc2UudmFsdWVbXCIxMDFcIl0uaXRlbXM7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvL2xldCBpZCA9IGkrMTtcblx0XHRcdFx0Ly9sZXQgZGVzY3JpcHRpb24gPSByZXNbaV0uZGVzY3JpcHRpb247XG5cblx0XHRcdFx0bGV0IF9pZCA9IHJlc1tpXS5pZDtcblx0XHRcdFx0bGV0IF90aXRsZSA9IHJlc1tpXS50aXRsZTtcblx0XHRcdFx0bGV0IF9pbWFnZSA9IHJlc1tpXS5pbWFnZTtcblx0XHRcdFx0bGV0IF9naWYgPSByZXNbaV0uZ2lmO1xuXHRcdFx0XHRsZXQgX3ZpZGVvID0gcmVzW2ldLnZpZGVvO1xuXHRcdFx0XHRsZXQgX25hbWUgPSByZXNbaV0ubmFtZTtcblx0XHRcdFx0bGV0IF9kZXNjcmlwdGlvbiA9IHJlc1tpXS5kZXNjcmlwdGlvbjtcblxuXHRcdFx0XHR0aGlzLl9hcnJlZ2xvRXhhbXBsZXMucHVzaCh7XG5cdFx0XHRcdFx0a2V5OiBpLFxuXHRcdFx0XHRcdF9pZCA6IHJlc1tpXS5pZCxcblx0XHRcdFx0XHRfdGl0bGUgOiByZXNbaV0udGl0bGUsXG5cdFx0XHRcdFx0X2ltYWdlIDogcmVzW2ldLmltYWdlLFxuXHRcdFx0XHRcdF9naWYgOiByZXNbaV0uZ2lmLFxuXHRcdFx0XHRcdF92aWRlbyA6IHJlc1tpXS52aWRlbyxcblx0XHRcdFx0XHRfbmFtZSA6IHJlc1tpXS5uYW1lLFxuXHRcdFx0XHRcdF9kZXNjcmlwdGlvbiA6IHJlc1tpXS5kZXNjcmlwdGlvbixcblx0XHRcdFx0fSlcblxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH1cblxuXHRwdWJsaWMgdmlld0RhdGEoaWQpIHtcblx0XHRzZXRTdHJpbmcoXCJpZERhdGFcIiwgJycgKyBpZClcblx0XHQvL1xuXG5cdFx0dGhpcy5tb3N0cmFyTWVuc2FqZSgpO1xuXHR9XG5cblx0LyoqXG4gICAgICogbW9zdHJhckNvbmZpZ3VyYWNpb25Ib3JhcmlvXG4gICAgICovXG5cdHB1YmxpYyBtb3N0cmFyTWVuc2FqZSgpIHtcblxuXHRcdC8vc2V0U3RyaW5nKFwidmVyVHV0b1wiLCBcInRydWVcIik7XG5cblx0XHQvL2NvbnNvbGUubG9nKGdldFN0cmluZyhcInZlclR1dG9cIikpO1xuXG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHRjb250ZXh0OiB7fSxcblx0XHRcdGZ1bGxzY3JlZW46IGZhbHNlLFxuXHRcdFx0dmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuXHRcdH07XG5cdFx0dGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcblxuXHRcdFx0aWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdH1cblxuXG5cdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogYmFja1xuXHQgKi9cblx0cHVibGljIGJhY2soKSB7XG5cdFx0dGhpcy5fcm91dEV4LmJhY2soKTtcblx0fVxuXG5cbn0iXX0=