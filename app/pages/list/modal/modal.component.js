"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var page_1 = require("tns-core-modules/ui/page/page");
var application_settings_1 = require("tns-core-modules/application-settings/application-settings");
var firebase_service_1 = require("~/services/firebase.service");
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
        this._serviceFirebase = new firebase_service_1.ServiceFirebase();
    }
    ModalComponent.prototype.ngOnInit = function () { };
    /**
     * viewData
     */
    ModalComponent.prototype.viewData = function (opcion) {
        application_settings_1.setString("opcion", '' + opcion);
        //this._routEx.navigate(["viewData"])
        //this._modal.closeCallback();
        this.opcion = application_settings_1.getString("opcion");
        this.idData = application_settings_1.getString("idData");
        this.getData();
        this._viewImage = false;
        this._viewGif = false;
    };
    ModalComponent.prototype.getData = function () {
        var _this = this;
        this._serviceFirebase.searchData().then(function (response) {
            console.log("Respuesta Del Usuario" + JSON.stringify(response));
            var res = response.value["101"].items;
            for (var i = 0; i < res.length; i++) {
                if (parseInt(_this.idData) === i) {
                    _this._image = res[i].image;
                    _this._gif = res[i].gif;
                }
            }
            if (_this._image !== undefined && _this.opcion === "image") {
                _this._viewImage = true;
                _this._titles = "View Image";
            }
            if (_this._gif !== undefined && _this.opcion === "gif") {
                _this._viewGif = true;
                _this._titles = "View Gif";
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCxtRUFBNEU7QUFDNUUsc0RBQXFEO0FBQ3JELG1HQUFrRztBQUNsRyxnRUFBOEQ7QUFDOUQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBUW5EO0lBVUMsd0JBQW9CLE9BQXdCLEVBQVMsTUFBeUIsRUFBUyxJQUFTO1FBQTVFLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQy9GLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFDLElBQUk7WUFDWixJQUFJLENBQUMsTUFBTyxDQUFDLGVBQWUsR0FBQyxhQUFhLENBQUE7UUFDMUQsQ0FBQyxDQUFDLENBQUM7UUFHRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFFL0MsQ0FBQztJQUVGLGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQ7O09BRUc7SUFDSSxpQ0FBUSxHQUFmLFVBQWdCLE1BQU07UUFDckIsZ0NBQVMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxHQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLHFDQUFxQztRQUNyQyw4QkFBOEI7UUFFOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQ0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUd2QixDQUFDO0lBS00sZ0NBQU8sR0FBZDtRQUFBLGlCQXdCQztRQXZCQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoRSxJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0QyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFFckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUUvQixLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFFeEIsQ0FBQztZQUNGLENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztZQUM3QixDQUFDO1lBRUQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNwRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDM0IsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQW5FVyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUseUNBQXlDO1lBQ3RELFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO1NBQ3JELENBQUM7eUNBWTJCLHlCQUFnQixFQUFpQiwyQkFBaUIsRUFBYyxXQUFJO09BVnBGLGNBQWMsQ0FvRTFCO0lBQUQscUJBQUM7Q0FBQSxBQXBFRCxJQW9FQztBQXBFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBzZXRTdHJpbmcsIGdldFN0cmluZyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3MvYXBwbGljYXRpb24tc2V0dGluZ3MnO1xuaW1wb3J0IHsgU2VydmljZUZpcmViYXNlIH0gZnJvbSAnfi9zZXJ2aWNlcy9maXJlYmFzZS5zZXJ2aWNlJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbW9kYWwnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvbGlzdC9tb2RhbC9tb2RhbC5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3BhZ2VzL2xpc3QvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdF92aWV3R2lmOiBib29sZWFuO1xuXHRfdGl0bGVzOiBzdHJpbmc7XG5cdF92aWV3SW1hZ2U6IGJvb2xlYW47XG5cdF9naWY6IGFueTtcblx0X2ltYWdlOiBhbnk7XG5cdGlkRGF0YTogYW55O1xuXHRvcGNpb246IGFueTtcblx0X3NlcnZpY2VGaXJlYmFzZTogU2VydmljZUZpcmViYXNlO1xuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0RXg6Um91dGVyRXh0ZW5zaW9ucyxwcml2YXRlIF9tb2RhbDogTW9kYWxEaWFsb2dQYXJhbXMscHJpdmF0ZSBwYWdlOlBhZ2UpIHtcblx0XHR0aGlzLnBhZ2Uub24oXCJsb2FkZWRcIiwgKGFyZ3MpPT57XG4gICAgICAgICAgICAoPGFueT5hcmdzLm9iamVjdCkuYmFja2dyb3VuZENvbG9yPVwidHJhbnNwYXJlbnRcIlxuXHRcdH0pO1xuXG5cdFx0XG5cdFx0XHR0aGlzLl9zZXJ2aWNlRmlyZWJhc2UgPSBuZXcgU2VydmljZUZpcmViYXNlKCk7XG5cdFx0XG5cdCB9XG5cblx0bmdPbkluaXQoKSB7IH1cblxuXHQvKipcblx0ICogdmlld0RhdGFcblx0ICovXG5cdHB1YmxpYyB2aWV3RGF0YShvcGNpb24pIHtcblx0XHRzZXRTdHJpbmcoXCJvcGNpb25cIiwnJytvcGNpb24pO1xuXHRcdC8vdGhpcy5fcm91dEV4Lm5hdmlnYXRlKFtcInZpZXdEYXRhXCJdKVxuXHRcdC8vdGhpcy5fbW9kYWwuY2xvc2VDYWxsYmFjaygpO1xuXG5cdFx0dGhpcy5vcGNpb24gPSBnZXRTdHJpbmcoXCJvcGNpb25cIik7XG5cdFx0dGhpcy5pZERhdGEgPSBnZXRTdHJpbmcoXCJpZERhdGFcIilcblx0XHR0aGlzLmdldERhdGEoKTtcblxuXHRcdHRoaXMuX3ZpZXdJbWFnZSA9IGZhbHNlO1xuXHRcdHRoaXMuX3ZpZXdHaWYgPSBmYWxzZTtcblxuXG5cdH1cblxuXG5cdFxuXG5cdHB1YmxpYyBnZXREYXRhKCl7XG5cdFx0dGhpcy5fc2VydmljZUZpcmViYXNlLnNlYXJjaERhdGEoKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiUmVzcHVlc3RhIERlbCBVc3VhcmlvXCIgKyBKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpO1xuXHRcdFx0bGV0IHJlcyA9IHJlc3BvbnNlLnZhbHVlW1wiMTAxXCJdLml0ZW1zO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XG5cdFx0XHRcdGlmKHBhcnNlSW50KHRoaXMuaWREYXRhKSA9PT0gaSl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5faW1hZ2UgPSByZXNbaV0uaW1hZ2U7XG5cdFx0XHRcdFx0dGhpcy5fZ2lmID0gcmVzW2ldLmdpZjtcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZih0aGlzLl9pbWFnZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMub3BjaW9uID09PSBcImltYWdlXCIpe1xuXHRcdFx0XHR0aGlzLl92aWV3SW1hZ2UgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLl90aXRsZXMgPSBcIlZpZXcgSW1hZ2VcIjtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5fZ2lmICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vcGNpb24gPT09IFwiZ2lmXCIpe1xuXHRcdFx0XHR0aGlzLl92aWV3R2lmID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fdGl0bGVzID0gXCJWaWV3IEdpZlwiO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59Il19