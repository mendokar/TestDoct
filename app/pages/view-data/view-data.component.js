"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var application_settings_1 = require("application-settings");
var firebase_service_1 = require("~/services/firebase.service");
var router_1 = require("nativescript-angular/router");
var ViewDataComponent = /** @class */ (function () {
    function ViewDataComponent(_routEx) {
        this._routEx = _routEx;
        this._viewImage = false;
        this._viewGif = false;
        this._serviceFirebase = new firebase_service_1.ServiceFirebase();
    }
    ViewDataComponent.prototype.ngOnInit = function () {
        this.opcion = application_settings_1.getString("opcion");
        this.idData = application_settings_1.getString("idData");
        this.getData();
    };
    ViewDataComponent.prototype.getData = function () {
        var _this = this;
        this._serviceFirebase.searchData().then(function (response) {
            console.log("Respuesta Del Usuario" + JSON.stringify(response));
            var res = response.value["101"].items;
            for (var i = 0; i < res.length; i++) {
                if (parseInt(_this.idData) === i) {
                    _this._title = res[i].title;
                    _this._image = res[i].image;
                    _this._gif = res[i].gif;
                    _this._description = res[i].description;
                }
            }
            if (_this._image !== undefined && _this.opcion === "image") {
                _this._viewImage = true;
            }
            if (_this._gif !== undefined && _this.opcion === "gif") {
                _this._viewGif = true;
            }
        });
    };
    /**
     * getBack
     */
    ViewDataComponent.prototype.getBack = function () {
        this._routEx.back();
    };
    ViewDataComponent = __decorate([
        core_1.Component({
            selector: 'view-data',
            templateUrl: './pages/view-data/view-data.component.html',
            styleUrls: ['./pages/view-data/view-data.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ViewDataComponent);
    return ViewDataComponent;
}());
exports.ViewDataComponent = ViewDataComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctZGF0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELDZEQUFpRDtBQUNqRCxnRUFBOEQ7QUFDOUQsc0RBQStEO0FBUS9EO0lBV0MsMkJBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBUDVDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQU9oQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLGdDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQ0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFSyxtQ0FBTyxHQUFkO1FBQUEsaUJBc0JDO1FBckJBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUVyQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDeEMsQ0FBQztZQUNGLENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ3BELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFHRDs7T0FFRztJQUNJLG1DQUFPLEdBQWQ7UUFDQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFuRFcsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsNENBQTRDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO1NBQ3hELENBQUM7eUNBYTJCLHlCQUFnQjtPQVhoQyxpQkFBaUIsQ0FvRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZ2V0U3RyaW5nIH0gZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQgeyBTZXJ2aWNlRmlyZWJhc2UgfSBmcm9tICd+L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3ZpZXctZGF0YScsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdlcy92aWV3LWRhdGEvdmlldy1kYXRhLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvdmlldy1kYXRhL3ZpZXctZGF0YS5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBWaWV3RGF0YUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0b3BjaW9uOiBzdHJpbmc7XG5cdF9naWY7XG5cdF92aWV3SW1hZ2UgPSBmYWxzZTtcblx0X3ZpZXdHaWYgPSBmYWxzZTtcblx0X3NlcnZpY2VGaXJlYmFzZTogU2VydmljZUZpcmViYXNlO1xuXHRpZERhdGE7XG5cdF90aXRsZTtcblx0X2ltYWdlO1xuXHRfZGVzY3JpcHRpb247XG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRFeDpSb3V0ZXJFeHRlbnNpb25zKSB7IFxuXHRcdHRoaXMuX3NlcnZpY2VGaXJlYmFzZSA9IG5ldyBTZXJ2aWNlRmlyZWJhc2UoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMub3BjaW9uID0gZ2V0U3RyaW5nKFwib3BjaW9uXCIpO1xuXHRcdHRoaXMuaWREYXRhID0gZ2V0U3RyaW5nKFwiaWREYXRhXCIpXG5cdFx0dGhpcy5nZXREYXRhKCk7XG5cdCB9XG5cblx0cHVibGljIGdldERhdGEoKXtcblx0XHR0aGlzLl9zZXJ2aWNlRmlyZWJhc2Uuc2VhcmNoRGF0YSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJSZXNwdWVzdGEgRGVsIFVzdWFyaW9cIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG5cdFx0XHRsZXQgcmVzID0gcmVzcG9uc2UudmFsdWVbXCIxMDFcIl0uaXRlbXM7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcblx0XHRcdFx0aWYocGFyc2VJbnQodGhpcy5pZERhdGEpID09PSBpKXtcblx0XHRcdFx0XHR0aGlzLl90aXRsZSA9IHJlc1tpXS50aXRsZTtcblx0XHRcdFx0XHR0aGlzLl9pbWFnZSA9IHJlc1tpXS5pbWFnZTtcblx0XHRcdFx0XHR0aGlzLl9naWYgPSByZXNbaV0uZ2lmO1xuXHRcdFx0XHRcdHRoaXMuX2Rlc2NyaXB0aW9uID0gcmVzW2ldLmRlc2NyaXB0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMuX2ltYWdlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vcGNpb24gPT09IFwiaW1hZ2VcIil7XG5cdFx0XHRcdHRoaXMuX3ZpZXdJbWFnZSA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMuX2dpZiAhPT0gdW5kZWZpbmVkICYmIHRoaXMub3BjaW9uID09PSBcImdpZlwiKXtcblx0XHRcdFx0dGhpcy5fdmlld0dpZiA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBnZXRCYWNrXG5cdCAqL1xuXHRwdWJsaWMgZ2V0QmFjaygpIHtcblx0XHR0aGlzLl9yb3V0RXguYmFjaygpO1xuXHR9XG59Il19