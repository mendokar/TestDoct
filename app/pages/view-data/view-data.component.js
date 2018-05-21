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
                _this._titles = "View Image";
            }
            if (_this._gif !== undefined && _this.opcion === "gif") {
                _this._viewGif = true;
                _this._titles = "View Gif";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctZGF0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELDZEQUFpRDtBQUNqRCxnRUFBOEQ7QUFDOUQsc0RBQStEO0FBUS9EO0lBWUMsMkJBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBUjVDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxrQ0FBZSxFQUFFLENBQUM7SUFDL0MsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLGdDQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQ0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFSyxtQ0FBTyxHQUFkO1FBQUEsaUJBd0JDO1FBdkJBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUVyQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQy9CLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUMzQixLQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFDeEMsQ0FBQztZQUNGLENBQUM7WUFFRCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ3hELEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixLQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztZQUM3QixDQUFDO1lBRUQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLElBQUksS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNwRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7WUFDM0IsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUdEOztPQUVHO0lBQ0ksbUNBQU8sR0FBZDtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXREVyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7U0FDeEQsQ0FBQzt5Q0FjMkIseUJBQWdCO09BWmhDLGlCQUFpQixDQXVEN0I7SUFBRCx3QkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFNlcnZpY2VGaXJlYmFzZSB9IGZyb20gJ34vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndmlldy1kYXRhJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3ZpZXctZGF0YS92aWV3LWRhdGEuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy92aWV3LWRhdGEvdmlldy1kYXRhLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFZpZXdEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRvcGNpb246IHN0cmluZztcblx0X2dpZjtcblx0X3ZpZXdJbWFnZSA9IGZhbHNlO1xuXHRfdmlld0dpZiA9IGZhbHNlO1xuXHRfc2VydmljZUZpcmViYXNlOiBTZXJ2aWNlRmlyZWJhc2U7XG5cdGlkRGF0YTtcblx0X3RpdGxlO1xuXHRfdGl0bGVzO1xuXHRfaW1hZ2U7XG5cdF9kZXNjcmlwdGlvbjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMpIHsgXG5cdFx0dGhpcy5fc2VydmljZUZpcmViYXNlID0gbmV3IFNlcnZpY2VGaXJlYmFzZSgpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5vcGNpb24gPSBnZXRTdHJpbmcoXCJvcGNpb25cIik7XG5cdFx0dGhpcy5pZERhdGEgPSBnZXRTdHJpbmcoXCJpZERhdGFcIilcblx0XHR0aGlzLmdldERhdGEoKTtcblx0IH1cblxuXHRwdWJsaWMgZ2V0RGF0YSgpe1xuXHRcdHRoaXMuX3NlcnZpY2VGaXJlYmFzZS5zZWFyY2hEYXRhKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlJlc3B1ZXN0YSBEZWwgVXN1YXJpb1wiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcblx0XHRcdGxldCByZXMgPSByZXNwb25zZS52YWx1ZVtcIjEwMVwiXS5pdGVtcztcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihwYXJzZUludCh0aGlzLmlkRGF0YSkgPT09IGkpe1xuXHRcdFx0XHRcdHRoaXMuX3RpdGxlID0gcmVzW2ldLnRpdGxlO1xuXHRcdFx0XHRcdHRoaXMuX2ltYWdlID0gcmVzW2ldLmltYWdlO1xuXHRcdFx0XHRcdHRoaXMuX2dpZiA9IHJlc1tpXS5naWY7XG5cdFx0XHRcdFx0dGhpcy5fZGVzY3JpcHRpb24gPSByZXNbaV0uZGVzY3JpcHRpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5faW1hZ2UgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9wY2lvbiA9PT0gXCJpbWFnZVwiKXtcblx0XHRcdFx0dGhpcy5fdmlld0ltYWdlID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5fdGl0bGVzID0gXCJWaWV3IEltYWdlXCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHRoaXMuX2dpZiAhPT0gdW5kZWZpbmVkICYmIHRoaXMub3BjaW9uID09PSBcImdpZlwiKXtcblx0XHRcdFx0dGhpcy5fdmlld0dpZiA9IHRydWU7XG5cdFx0XHRcdHRoaXMuX3RpdGxlcyA9IFwiVmlldyBHaWZcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cblx0LyoqXG5cdCAqIGdldEJhY2tcblx0ICovXG5cdHB1YmxpYyBnZXRCYWNrKCkge1xuXHRcdHRoaXMuX3JvdXRFeC5iYWNrKCk7XG5cdH1cbn0iXX0=