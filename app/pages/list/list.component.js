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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSxnRUFBOEQ7QUFDOUQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELGtFQUF1RTtBQUV2RSw2REFBZ0Q7QUFDaEQsc0RBQStEO0FBQy9ELHNFQUFvRTtBQVFwRTtJQUtDLHVCQUFvQixPQUF5QixFQUFVLEtBQXVCLEVBQ3JFLEtBQXlCO1FBRGQsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUNyRSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUZsQyxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFHckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksa0NBQWUsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFTSwrQkFBTyxHQUFkO1FBQUEsaUJBOEJDO1FBN0JBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNyQyxlQUFlO2dCQUNmLHVDQUF1QztnQkFFdkMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFDdEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDMUIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEIsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFFdEMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztvQkFDMUIsR0FBRyxFQUFFLENBQUM7b0JBQ04sR0FBRyxFQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNmLE1BQU0sRUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztvQkFDckIsTUFBTSxFQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO29CQUNyQixJQUFJLEVBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7b0JBQ2pCLE1BQU0sRUFBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztvQkFDckIsS0FBSyxFQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUNuQixZQUFZLEVBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVc7aUJBQ2pDLENBQUMsQ0FBQTtZQUVILENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLEVBQUU7UUFDakIsZ0NBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQzVCLEVBQUU7UUFFRixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVNO0lBQ0Msc0NBQWMsR0FBckI7UUFFQywrQkFBK0I7UUFFL0Isb0NBQW9DO1FBRXBDLElBQUksT0FBTyxHQUFHO1lBQ2IsT0FBTyxFQUFFLEVBQUU7WUFDWCxVQUFVLEVBQUUsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztTQUM1QixDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsZ0NBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBRXJELEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBRXhCLENBQUM7UUFHRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUEzRVcsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztTQUM5QyxDQUFDO3lDQU80Qix5QkFBZ0IsRUFBaUIsdUJBQWdCO1lBQzlELGlDQUFrQjtPQU50QixhQUFhLENBOEV6QjtJQUFELG9CQUFDO0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VydmljZUZpcmViYXNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbmltcG9ydCB7IHNldFN0cmluZyB9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnfi9wYWdlcy9saXN0L21vZGFsL21vZGFsLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2xpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cblx0X3NlcnZpY2VGaXJlYmFzZTogU2VydmljZUZpcmViYXNlO1xuXHRfYXJyZWdsb0V4YW1wbGVzID0gW107XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRFeDogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UpIHtcblx0XHR0aGlzLl9zZXJ2aWNlRmlyZWJhc2UgPSBuZXcgU2VydmljZUZpcmViYXNlKCk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLmdldERhdGEoKTtcblx0fVxuXG5cdHB1YmxpYyBnZXREYXRhKCkge1xuXHRcdHRoaXMuX3NlcnZpY2VGaXJlYmFzZS5zZWFyY2hEYXRhKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlJlc3B1ZXN0YSBEZWwgVXN1YXJpb1wiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcblx0XHRcdGxldCByZXMgPSByZXNwb25zZS52YWx1ZVtcIjEwMVwiXS5pdGVtcztcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdC8vbGV0IGlkID0gaSsxO1xuXHRcdFx0XHQvL2xldCBkZXNjcmlwdGlvbiA9IHJlc1tpXS5kZXNjcmlwdGlvbjtcblxuXHRcdFx0XHRsZXQgX2lkID0gcmVzW2ldLmlkO1xuXHRcdFx0XHRsZXQgX3RpdGxlID0gcmVzW2ldLnRpdGxlO1xuXHRcdFx0XHRsZXQgX2ltYWdlID0gcmVzW2ldLmltYWdlO1xuXHRcdFx0XHRsZXQgX2dpZiA9IHJlc1tpXS5naWY7XG5cdFx0XHRcdGxldCBfdmlkZW8gPSByZXNbaV0udmlkZW87XG5cdFx0XHRcdGxldCBfbmFtZSA9IHJlc1tpXS5uYW1lO1xuXHRcdFx0XHRsZXQgX2Rlc2NyaXB0aW9uID0gcmVzW2ldLmRlc2NyaXB0aW9uO1xuXG5cdFx0XHRcdHRoaXMuX2FycmVnbG9FeGFtcGxlcy5wdXNoKHtcblx0XHRcdFx0XHRrZXk6IGksXG5cdFx0XHRcdFx0X2lkIDogcmVzW2ldLmlkLFxuXHRcdFx0XHRcdF90aXRsZSA6IHJlc1tpXS50aXRsZSxcblx0XHRcdFx0XHRfaW1hZ2UgOiByZXNbaV0uaW1hZ2UsXG5cdFx0XHRcdFx0X2dpZiA6IHJlc1tpXS5naWYsXG5cdFx0XHRcdFx0X3ZpZGVvIDogcmVzW2ldLnZpZGVvLFxuXHRcdFx0XHRcdF9uYW1lIDogcmVzW2ldLm5hbWUsXG5cdFx0XHRcdFx0X2Rlc2NyaXB0aW9uIDogcmVzW2ldLmRlc2NyaXB0aW9uLFxuXHRcdFx0XHR9KVxuXG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdHB1YmxpYyB2aWV3RGF0YShpZCkge1xuXHRcdHNldFN0cmluZyhcImlkRGF0YVwiLCAnJyArIGlkKVxuXHRcdC8vXG5cblx0XHR0aGlzLm1vc3RyYXJNZW5zYWplKCk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBtb3N0cmFyQ29uZmlndXJhY2lvbkhvcmFyaW9cbiAgICAgKi9cblx0cHVibGljIG1vc3RyYXJNZW5zYWplKCkge1xuXG5cdFx0Ly9zZXRTdHJpbmcoXCJ2ZXJUdXRvXCIsIFwidHJ1ZVwiKTtcblxuXHRcdC8vY29uc29sZS5sb2coZ2V0U3RyaW5nKFwidmVyVHV0b1wiKSk7XG5cblx0XHRsZXQgb3B0aW9ucyA9IHtcblx0XHRcdGNvbnRleHQ6IHt9LFxuXHRcdFx0ZnVsbHNjcmVlbjogZmFsc2UsXG5cdFx0XHR2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmXG5cdFx0fTtcblx0XHR0aGlzLm1vZGFsLnNob3dNb2RhbChNb2RhbENvbXBvbmVudCwgb3B0aW9ucykudGhlbihyZXMgPT4ge1xuXG5cdFx0XHRpZiAocmVzICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0fVxuXG5cblx0XHR9KTtcblx0fVxuXG5cbn0iXX0=