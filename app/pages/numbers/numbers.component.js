"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var application_settings_1 = require("tns-core-modules/application-settings/application-settings");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var NumbersComponent = /** @class */ (function () {
    function NumbersComponent(_routEx, page) {
        this._routEx = _routEx;
        this.page = page;
        this.arregloNumber = [
            {
                number: "1",
                letter: "Australia",
            },
            {
                number: "2",
                letter: "Bengladesh",
            },
            {
                number: "3",
                letter: "Colombia",
            },
            {
                number: "4",
                letter: "Denmark",
            },
            {
                number: "5",
                letter: "England",
            },
            {
                number: "6",
                letter: "India",
            },
            {
                number: "7",
                letter: "Egypt",
            },
            {
                number: "8",
                letter: "USA",
            },
            {
                number: "9",
                letter: "Spain",
            }
        ];
        this.page.actionBarHidden = true;
    }
    NumbersComponent.prototype.ngOnInit = function () { };
    /**
     * viewList
     */
    NumbersComponent.prototype.viewList = function (title) {
        application_settings_1.setString("title", '' + title);
        this._routEx.navigate(["list"]);
    };
    NumbersComponent = __decorate([
        core_1.Component({
            selector: 'numbers',
            templateUrl: './pages/numbers/numbers.component.html',
            styleUrls: ['./pages/numbers/numbers.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, page_1.Page])
    ], NumbersComponent);
    return NumbersComponent;
}());
exports.NumbersComponent = NumbersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJudW1iZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0Qsc0RBQXFEO0FBQ3JELG1HQUF1RjtBQUN2RiwwREFBMEQ7QUFDMUQsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QyxtREFBbUQ7QUFRbkQ7SUFFQywwQkFBb0IsT0FBd0IsRUFBUyxJQUFTO1FBQTFDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBSztRQU05RCxrQkFBYSxHQUFHO1lBQ2Y7Z0JBQ0MsTUFBTSxFQUFDLEdBQUc7Z0JBQ1YsTUFBTSxFQUFDLFdBQVc7YUFFbEI7WUFDRDtnQkFDQyxNQUFNLEVBQUMsR0FBRztnQkFDVixNQUFNLEVBQUMsWUFBWTthQUVuQjtZQUNEO2dCQUNDLE1BQU0sRUFBQyxHQUFHO2dCQUNWLE1BQU0sRUFBQyxVQUFVO2FBRWpCO1lBQ0Q7Z0JBQ0MsTUFBTSxFQUFDLEdBQUc7Z0JBQ1YsTUFBTSxFQUFDLFNBQVM7YUFFaEI7WUFDRDtnQkFDQyxNQUFNLEVBQUMsR0FBRztnQkFDVixNQUFNLEVBQUMsU0FBUzthQUVoQjtZQUNEO2dCQUNDLE1BQU0sRUFBQyxHQUFHO2dCQUNWLE1BQU0sRUFBQyxPQUFPO2FBRWQ7WUFDRDtnQkFDQyxNQUFNLEVBQUMsR0FBRztnQkFDVixNQUFNLEVBQUMsT0FBTzthQUVkO1lBQ0Q7Z0JBQ0MsTUFBTSxFQUFDLEdBQUc7Z0JBQ1YsTUFBTSxFQUFDLEtBQUs7YUFFWjtZQUNEO2dCQUNDLE1BQU0sRUFBQyxHQUFHO2dCQUNWLE1BQU0sRUFBQyxPQUFPO2FBRWQ7U0FDRCxDQUFBO1FBbkRBLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUNBQVEsR0FBUixjQUFhLENBQUM7SUFrRGQ7O09BRUc7SUFDSSxtQ0FBUSxHQUFmLFVBQWdCLEtBQUs7UUFDcEIsZ0NBQVMsQ0FBQyxPQUFPLEVBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBOURXLGdCQUFnQjtRQU41QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHdDQUF3QztZQUNyRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztTQUNwRCxDQUFDO3lDQUkyQix5QkFBZ0IsRUFBYyxXQUFJO09BRmxELGdCQUFnQixDQStENUI7SUFBRCx1QkFBQztDQUFBLEFBL0RELElBK0RDO0FBL0RZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBzZXRTdHJpbmcgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uLXNldHRpbmdzL2FwcGxpY2F0aW9uLXNldHRpbmdzJztcbi8vaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbi8vaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSAndWkvdGV4dC1maWVsZCc7XG4vL2ltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG4vL2ltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnbnVtYmVycycsXG5cdHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9udW1iZXJzL251bWJlcnMuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9wYWdlcy9udW1iZXJzL251bWJlcnMuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTnVtYmVyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfcm91dEV4OlJvdXRlckV4dGVuc2lvbnMscHJpdmF0ZSBwYWdlOlBhZ2UpIHsgXG5cdFx0dGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdGFycmVnbG9OdW1iZXIgPSBbXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiMVwiLFxuXHRcdFx0bGV0dGVyOlwiQXVzdHJhbGlhXCIsXG5cdFx0XHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdG51bWJlcjpcIjJcIixcblx0XHRcdGxldHRlcjpcIkJlbmdsYWRlc2hcIixcblx0XHRcdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiM1wiLFxuXHRcdFx0bGV0dGVyOlwiQ29sb21iaWFcIixcblxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiNFwiLFxuXHRcdFx0bGV0dGVyOlwiRGVubWFya1wiLFxuXHRcdFx0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRudW1iZXI6XCI1XCIsXG5cdFx0XHRsZXR0ZXI6XCJFbmdsYW5kXCIsXG5cblx0XHR9LFxuXHRcdHtcblx0XHRcdG51bWJlcjpcIjZcIixcblx0XHRcdGxldHRlcjpcIkluZGlhXCIsXG5cdFx0XHRcblx0XHR9LFxuXHRcdHtcblx0XHRcdG51bWJlcjpcIjdcIixcblx0XHRcdGxldHRlcjpcIkVneXB0XCIsXG5cblx0XHR9LFxuXHRcdHtcblx0XHRcdG51bWJlcjpcIjhcIixcblx0XHRcdGxldHRlcjpcIlVTQVwiLFxuXHRcdFx0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRudW1iZXI6XCI5XCIsXG5cdFx0XHRsZXR0ZXI6XCJTcGFpblwiLFxuXG5cdFx0fVxuXHRdXG5cblx0LyoqXG5cdCAqIHZpZXdMaXN0XG5cdCAqL1xuXHRwdWJsaWMgdmlld0xpc3QodGl0bGUpIHtcblx0XHRzZXRTdHJpbmcoXCJ0aXRsZVwiLCcnK3RpdGxlKTtcblx0XHR0aGlzLl9yb3V0RXgubmF2aWdhdGUoW1wibGlzdFwiXSlcblx0fVxufSJdfQ==