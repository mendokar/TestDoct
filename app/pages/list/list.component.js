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
        this.getData();
    };
    ListComponent.prototype.getData = function () {
        var _this = this;
        this._serviceFirebase.searchData().then(function (response) {
            console.log("Respuesta Del Usuario" + JSON.stringify(response));
            var res = response.value;
            for (var i = 0; i < res.length; i++) {
                var id = i + 1;
                var description = res[i].description;
                _this._arregloExamples.push({
                    key: i,
                    id: id,
                    description: description
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSxnRUFBOEQ7QUFDOUQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELGtFQUF1RTtBQUV2RSw2REFBK0M7QUFDL0Msc0RBQStEO0FBQy9ELHNFQUFvRTtBQVFwRTtJQUtDLHVCQUFvQixPQUF3QixFQUFTLEtBQXVCLEVBQ25FLEtBQXlCO1FBRGQsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNuRSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUZsQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVLLCtCQUFPLEdBQWQ7UUFBQSxpQkFpQkM7UUFoQkEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDckMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFDLENBQUMsQ0FBQztnQkFDYixJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUVyQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO29CQUMxQixHQUFHLEVBQUMsQ0FBQztvQkFDTCxFQUFFLEVBQUMsRUFBRTtvQkFDTCxXQUFXLEVBQUMsV0FBVztpQkFDdkIsQ0FBQyxDQUFBO1lBRUgsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVNLGdDQUFRLEdBQWYsVUFBZ0IsRUFBRTtRQUNqQixnQ0FBUyxDQUFDLFFBQVEsRUFBQyxFQUFFLEdBQUMsRUFBRSxDQUFDLENBQUE7UUFDekIsRUFBRTtRQUVGLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O09BRU07SUFDQyxzQ0FBYyxHQUFyQjtRQUVDLCtCQUErQjtRQUUvQixvQ0FBb0M7UUFFcEMsSUFBSSxPQUFPLEdBQUc7WUFDYixPQUFPLEVBQUUsRUFBRTtZQUNYLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLO1NBQzVCLENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxnQ0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFFckQsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFeEIsQ0FBQztRQUdGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQTlEVyxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQzlDLENBQUM7eUNBTzJCLHlCQUFnQixFQUFnQix1QkFBZ0I7WUFDNUQsaUNBQWtCO09BTnRCLGFBQWEsQ0FpRXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWpFRCxJQWlFQztBQWpFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2aWNlRmlyZWJhc2UgfSBmcm9tICd+L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuLy9pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgc2V0U3RyaW5nfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIlxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJ34vcGFnZXMvbGlzdC9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdsaXN0Jyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BhZ2VzL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG5cdF9zZXJ2aWNlRmlyZWJhc2U6IFNlcnZpY2VGaXJlYmFzZTtcblx0X2FycmVnbG9FeGFtcGxlcyA9IFtdO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0RXg6Um91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSkgeyBcblx0XHR0aGlzLl9zZXJ2aWNlRmlyZWJhc2UgPSBuZXcgU2VydmljZUZpcmViYXNlKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdldERhdGEoKTtcblx0IH1cblxuXHRwdWJsaWMgZ2V0RGF0YSgpe1xuXHRcdHRoaXMuX3NlcnZpY2VGaXJlYmFzZS5zZWFyY2hEYXRhKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlJlc3B1ZXN0YSBEZWwgVXN1YXJpb1wiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcblx0XHRcdGxldCByZXMgPSByZXNwb25zZS52YWx1ZTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBpZCA9IGkrMTtcblx0XHRcdFx0bGV0IGRlc2NyaXB0aW9uID0gcmVzW2ldLmRlc2NyaXB0aW9uO1xuXG5cdFx0XHRcdHRoaXMuX2FycmVnbG9FeGFtcGxlcy5wdXNoKHtcblx0XHRcdFx0XHRrZXk6aSxcblx0XHRcdFx0XHRpZDppZCxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjpkZXNjcmlwdGlvblxuXHRcdFx0XHR9KVxuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG5cblx0cHVibGljIHZpZXdEYXRhKGlkKXtcblx0XHRzZXRTdHJpbmcoXCJpZERhdGFcIiwnJytpZClcblx0XHQvL1xuXG5cdFx0dGhpcy5tb3N0cmFyTWVuc2FqZSgpO1xuXHR9XG5cblx0LyoqXG4gICAgICogbW9zdHJhckNvbmZpZ3VyYWNpb25Ib3JhcmlvXG4gICAgICovXG5cdHB1YmxpYyBtb3N0cmFyTWVuc2FqZSgpIHtcblxuXHRcdC8vc2V0U3RyaW5nKFwidmVyVHV0b1wiLCBcInRydWVcIik7XG5cblx0XHQvL2NvbnNvbGUubG9nKGdldFN0cmluZyhcInZlclR1dG9cIikpO1xuXG5cdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHRjb250ZXh0OiB7fSxcblx0XHRcdGZ1bGxzY3JlZW46IGZhbHNlLFxuXHRcdFx0dmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZlxuXHRcdH07XG5cdFx0dGhpcy5tb2RhbC5zaG93TW9kYWwoTW9kYWxDb21wb25lbnQsIG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcblxuXHRcdFx0aWYgKHJlcyAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdH1cblxuXG5cdFx0fSk7XG5cdH1cblxuXG59Il19