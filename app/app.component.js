"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _firebase = require("nativescript-plugin-firebase");
var page_1 = require("tns-core-modules/ui/page/page");
var AppComponent = /** @class */ (function () {
    // Your TypeScript logic goes here
    function AppComponent(_page) {
        this._page = _page;
        this._page.actionBarHidden = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        _firebase.init({}).then(function (instance) {
            console.log("firebase.init done");
            //alert("firebase.init done"+instance)
        }, function (error) {
            console.log("firebase.init error: " + error);
            //alert("firebase.init error: " + error)
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsd0RBQTBEO0FBQzFELHNEQUFxRDtBQU9yRDtJQUNFLGtDQUFrQztJQUVsQyxzQkFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7UUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0UsaUdBQWlHO1FBQ2pHLHVDQUF1QztRQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBR1YsQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFDLFFBQVE7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsc0NBQXNDO1FBQzFDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQzdDLHdDQUF3QztRQUM1QyxDQUFDLENBQ0osQ0FBQztJQUNSLENBQUM7SUF2QlUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLDJDQUEyQztTQUN0RCxDQUFDO3lDQUkwQixXQUFJO09BSG5CLFlBQVksQ0F5QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBfZmlyZWJhc2UgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgPHBhZ2Utcm91dGVyLW91dGxldD48L3BhZ2Utcm91dGVyLW91dGxldD5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9wYWdlOlBhZ2Upe1xuICAgIHRoaXMuX3BhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vQ2FsbGVkIGFmdGVyIHRoZSBjb25zdHJ1Y3RvciwgaW5pdGlhbGl6aW5nIGlucHV0IHByb3BlcnRpZXMsIGFuZCB0aGUgZmlyc3QgY2FsbCB0byBuZ09uQ2hhbmdlcy5cbiAgICAvL0FkZCAnaW1wbGVtZW50cyBPbkluaXQnIHRvIHRoZSBjbGFzcy5cbiAgICBfZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgICAgICAvLyBPcHRpb25hbGx5IHBhc3MgaW4gcHJvcGVydGllcyBmb3IgZGF0YWJhc2UsIGF1dGhlbnRpY2F0aW9uIGFuZCBjbG91ZCBtZXNzYWdpbmcsXG4gICAgICAgICAgICAvLyBzZWUgdGhlaXIgcmVzcGVjdGl2ZSBkb2NzLlxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgICAgICAgICAgLy9hbGVydChcImZpcmViYXNlLmluaXQgZG9uZVwiK2luc3RhbmNlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgLy9hbGVydChcImZpcmViYXNlLmluaXQgZXJyb3I6IFwiICsgZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gIH1cblxufVxuIl19