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
        this._serviceFirebase = new firebase_service_1.ServiceFirebase();
    }
    ViewDataComponent.prototype.ngOnInit = function () {
        this.idData = application_settings_1.getString("idData");
        this.getData();
    };
    ViewDataComponent.prototype.getData = function () {
        var _this = this;
        this._serviceFirebase.searchData().then(function (response) {
            console.log("Respuesta Del Usuario" + JSON.stringify(response));
            var res = response.value;
            for (var i = 0; i < res.length; i++) {
                if (parseInt(_this.idData) === i) {
                    _this._title = res[i].title;
                    _this._image = res[i].image;
                    _this._description = res[i].description;
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1kYXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctZGF0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELDZEQUFpRDtBQUNqRCxnRUFBOEQ7QUFDOUQsc0RBQStEO0FBUS9EO0lBT0MsMkJBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0NBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUssbUNBQU8sR0FBZDtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFFckMsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUMvQixLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDM0IsS0FBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO2dCQUN4QyxDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUdEOztPQUVHO0lBQ0ksbUNBQU8sR0FBZDtRQUNDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQXJDVyxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7U0FDeEQsQ0FBQzt5Q0FTMkIseUJBQWdCO09BUGhDLGlCQUFpQixDQXNDN0I7SUFBRCx3QkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBnZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IFNlcnZpY2VGaXJlYmFzZSB9IGZyb20gJ34vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAndmlldy1kYXRhJyxcblx0dGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3ZpZXctZGF0YS92aWV3LWRhdGEuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy92aWV3LWRhdGEvdmlldy1kYXRhLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFZpZXdEYXRhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRfc2VydmljZUZpcmViYXNlOiBTZXJ2aWNlRmlyZWJhc2U7XG5cdGlkRGF0YTtcblx0X3RpdGxlO1xuXHRfaW1hZ2U7XG5cdF9kZXNjcmlwdGlvbjtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMpIHsgXG5cdFx0dGhpcy5fc2VydmljZUZpcmViYXNlID0gbmV3IFNlcnZpY2VGaXJlYmFzZSgpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5pZERhdGEgPSBnZXRTdHJpbmcoXCJpZERhdGFcIilcblx0XHR0aGlzLmdldERhdGEoKTtcblx0IH1cblxuXHRwdWJsaWMgZ2V0RGF0YSgpe1xuXHRcdHRoaXMuX3NlcnZpY2VGaXJlYmFzZS5zZWFyY2hEYXRhKCkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlJlc3B1ZXN0YSBEZWwgVXN1YXJpb1wiICsgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcblx0XHRcdGxldCByZXMgPSByZXNwb25zZS52YWx1ZTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihwYXJzZUludCh0aGlzLmlkRGF0YSkgPT09IGkpe1xuXHRcdFx0XHRcdHRoaXMuX3RpdGxlID0gcmVzW2ldLnRpdGxlO1xuXHRcdFx0XHRcdHRoaXMuX2ltYWdlID0gcmVzW2ldLmltYWdlO1xuXHRcdFx0XHRcdHRoaXMuX2Rlc2NyaXB0aW9uID0gcmVzW2ldLmRlc2NyaXB0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXG5cdC8qKlxuXHQgKiBnZXRCYWNrXG5cdCAqL1xuXHRwdWJsaWMgZ2V0QmFjaygpIHtcblx0XHR0aGlzLl9yb3V0RXguYmFjaygpO1xuXHR9XG59Il19