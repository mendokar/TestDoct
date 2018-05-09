"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _firebase = require("nativescript-plugin-firebase");
var page_1 = require("tns-core-modules/ui/page/page");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_gif_1 = require("nativescript-gif");
element_registry_1.registerElement("Gif", function () { return nativescript_gif_1.Gif; });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsd0RBQTBEO0FBQzFELHNEQUFxRDtBQUVyRCwwRUFBd0U7QUFDeEUscURBQXVDO0FBQ3ZDLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxzQkFBRyxFQUFILENBQUcsQ0FBQyxDQUFDO0FBT2xDO0lBQ0Usa0NBQWtDO0lBRWxDLHNCQUFvQixLQUFVO1FBQVYsVUFBSyxHQUFMLEtBQUssQ0FBSztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDcEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDRSxpR0FBaUc7UUFDakcsdUNBQXVDO1FBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFHVixDQUFDLENBQUMsSUFBSSxDQUNILFVBQUMsUUFBUTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxzQ0FBc0M7UUFDMUMsQ0FBQyxFQUNELFVBQUMsS0FBSztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDN0Msd0NBQXdDO1FBQzVDLENBQUMsQ0FDSixDQUFDO0lBQ1IsQ0FBQztJQXZCVSxZQUFZO1FBSnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsMkNBQTJDO1NBQ3RELENBQUM7eUNBSTBCLFdBQUk7T0FIbkIsWUFBWSxDQXlCeEI7SUFBRCxtQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIF9maXJlYmFzZSBmcm9tIFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuXG5pbXBvcnQgeyByZWdpc3RlckVsZW1lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZWxlbWVudC1yZWdpc3RyeVwiO1xuaW1wb3J0IHsgR2lmIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1naWZcIjtcbnJlZ2lzdGVyRWxlbWVudChcIkdpZlwiLCAoKSA9PiBHaWYpO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGA8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6UGFnZSl7XG4gICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy9DYWxsZWQgYWZ0ZXIgdGhlIGNvbnN0cnVjdG9yLCBpbml0aWFsaXppbmcgaW5wdXQgcHJvcGVydGllcywgYW5kIHRoZSBmaXJzdCBjYWxsIHRvIG5nT25DaGFuZ2VzLlxuICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxuICAgIF9maXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgIC8vIE9wdGlvbmFsbHkgcGFzcyBpbiBwcm9wZXJ0aWVzIGZvciBkYXRhYmFzZSwgYXV0aGVudGljYXRpb24gYW5kIGNsb3VkIG1lc3NhZ2luZyxcbiAgICAgICAgICAgIC8vIHNlZSB0aGVpciByZXNwZWN0aXZlIGRvY3MuXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KFwiZmlyZWJhc2UuaW5pdCBkb25lXCIraW5zdGFuY2UpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGVycm9yOiBcIiArIGVycm9yKTtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KFwiZmlyZWJhc2UuaW5pdCBlcnJvcjogXCIgKyBlcnJvcilcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgfVxuXG59XG4iXX0=