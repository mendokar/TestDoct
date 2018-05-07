"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase_service_1 = require("~/services/firebase.service");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var application_settings_1 = require("application-settings");
var router_1 = require("nativescript-angular/router");
var ListComponent = /** @class */ (function () {
    function ListComponent(_routEx) {
        this._routEx = _routEx;
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
        this._routEx.navigate(["viewData"]);
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'list',
            templateUrl: './pages/list/list.component.html',
            styleUrls: ['./pages/list/list.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnRUFBOEQ7QUFDOUQsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBRW5ELDZEQUErQztBQUMvQyxzREFBK0Q7QUFRL0Q7SUFLQyx1QkFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFENUMscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRXJCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGtDQUFlLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFSywrQkFBTyxHQUFkO1FBQUEsaUJBaUJDO1FBaEJBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3JDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBQyxDQUFDLENBQUM7Z0JBQ2IsSUFBSSxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztnQkFFckMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztvQkFDMUIsR0FBRyxFQUFDLENBQUM7b0JBQ0wsRUFBRSxFQUFDLEVBQUU7b0JBQ0wsV0FBVyxFQUFDLFdBQVc7aUJBQ3ZCLENBQUMsQ0FBQTtZQUVILENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQWdCLEVBQUU7UUFDakIsZ0NBQVMsQ0FBQyxRQUFRLEVBQUMsRUFBRSxHQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBbkNXLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDOUMsQ0FBQzt5Q0FPMkIseUJBQWdCO09BTGhDLGFBQWEsQ0FvQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2aWNlRmlyZWJhc2UgfSBmcm9tICd+L3NlcnZpY2VzL2ZpcmViYXNlLnNlcnZpY2UnO1xuLy9pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuLy9pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tICd1aS90ZXh0LWZpZWxkJztcbi8vaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbi8vaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBzZXRTdHJpbmd9IGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbGlzdCcsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy9saXN0L2xpc3QuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuXHRfc2VydmljZUZpcmViYXNlOiBTZXJ2aWNlRmlyZWJhc2U7XG5cdF9hcnJlZ2xvRXhhbXBsZXMgPSBbXTtcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMpIHsgXG5cdFx0dGhpcy5fc2VydmljZUZpcmViYXNlID0gbmV3IFNlcnZpY2VGaXJlYmFzZSgpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdFx0dGhpcy5nZXREYXRhKCk7XG5cdCB9XG5cblx0cHVibGljIGdldERhdGEoKXtcblx0XHR0aGlzLl9zZXJ2aWNlRmlyZWJhc2Uuc2VhcmNoRGF0YSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coXCJSZXNwdWVzdGEgRGVsIFVzdWFyaW9cIiArIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSk7XG5cdFx0XHRsZXQgcmVzID0gcmVzcG9uc2UudmFsdWU7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgaWQgPSBpKzE7XG5cdFx0XHRcdGxldCBkZXNjcmlwdGlvbiA9IHJlc1tpXS5kZXNjcmlwdGlvbjtcblxuXHRcdFx0XHR0aGlzLl9hcnJlZ2xvRXhhbXBsZXMucHVzaCh7XG5cdFx0XHRcdFx0a2V5OmksXG5cdFx0XHRcdFx0aWQ6aWQsXG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ZGVzY3JpcHRpb25cblx0XHRcdFx0fSlcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fVxuXG5cdHB1YmxpYyB2aWV3RGF0YShpZCl7XG5cdFx0c2V0U3RyaW5nKFwiaWREYXRhXCIsJycraWQpXG5cdFx0dGhpcy5fcm91dEV4Lm5hdmlnYXRlKFtcInZpZXdEYXRhXCJdKVxuXHR9XG59Il19