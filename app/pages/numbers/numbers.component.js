"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
//import { RouterExtensions } from 'nativescript-angular';
//import { TextField } from 'ui/text-field';
//import { EventData } from 'data/observable';
//import { ActivatedRoute } from '@angular/router';
var NumbersComponent = /** @class */ (function () {
    function NumbersComponent(_routEx) {
        this._routEx = _routEx;
        this.arregloNumber = [
            {
                number: "1",
                letter: "A",
                numbers: "5"
            },
            {
                number: "1",
                letter: "A",
                numbers: "5"
            },
            {
                number: "1",
                letter: "A",
                numbers: "5"
            },
            {
                number: "1",
                letter: "A",
                numbers: "5"
            },
            {
                number: "1",
                letter: "A",
                numbers: "5"
            }
        ];
    }
    NumbersComponent.prototype.ngOnInit = function () { };
    /**
     * viewList
     */
    NumbersComponent.prototype.viewList = function () {
        this._routEx.navigate(["list"]);
    };
    NumbersComponent = __decorate([
        core_1.Component({
            selector: 'numbers',
            templateUrl: './pages/numbers/numbers.component.html',
            styleUrls: ['./pages/numbers/numbers.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], NumbersComponent);
    return NumbersComponent;
}());
exports.NumbersComponent = NumbersComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVycy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJudW1iZXJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsMERBQTBEO0FBQzFELDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBUW5EO0lBRUMsMEJBQW9CLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBSTVDLGtCQUFhLEdBQUc7WUFDZjtnQkFDQyxNQUFNLEVBQUMsR0FBRztnQkFDVixNQUFNLEVBQUMsR0FBRztnQkFDVixPQUFPLEVBQUMsR0FBRzthQUNYO1lBQ0Q7Z0JBQ0MsTUFBTSxFQUFDLEdBQUc7Z0JBQ1YsTUFBTSxFQUFDLEdBQUc7Z0JBQ1YsT0FBTyxFQUFDLEdBQUc7YUFDWDtZQUNEO2dCQUNDLE1BQU0sRUFBQyxHQUFHO2dCQUNWLE1BQU0sRUFBQyxHQUFHO2dCQUNWLE9BQU8sRUFBQyxHQUFHO2FBQ1g7WUFDRDtnQkFDQyxNQUFNLEVBQUMsR0FBRztnQkFDVixNQUFNLEVBQUMsR0FBRztnQkFDVixPQUFPLEVBQUMsR0FBRzthQUNYO1lBQ0Q7Z0JBQ0MsTUFBTSxFQUFDLEdBQUc7Z0JBQ1YsTUFBTSxFQUFDLEdBQUc7Z0JBQ1YsT0FBTyxFQUFDLEdBQUc7YUFDWDtTQUNELENBQUE7SUE5QitDLENBQUM7SUFFakQsbUNBQVEsR0FBUixjQUFhLENBQUM7SUE4QmQ7O09BRUc7SUFDSSxtQ0FBUSxHQUFmO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUF2Q1csZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO1NBQ3BELENBQUM7eUNBSTJCLHlCQUFnQjtPQUZoQyxnQkFBZ0IsQ0F3QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG4vL2ltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhcic7XG4vL2ltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuLy9pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuLy9pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ251bWJlcnMnLFxuXHR0ZW1wbGF0ZVVybDogJy4vcGFnZXMvbnVtYmVycy9udW1iZXJzLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcGFnZXMvbnVtYmVycy9udW1iZXJzLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE51bWJlcnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRFeDpSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuXHRuZ09uSW5pdCgpIHsgfVxuXG5cdGFycmVnbG9OdW1iZXIgPSBbXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiMVwiLFxuXHRcdFx0bGV0dGVyOlwiQVwiLFxuXHRcdFx0bnVtYmVyczpcIjVcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiMVwiLFxuXHRcdFx0bGV0dGVyOlwiQVwiLFxuXHRcdFx0bnVtYmVyczpcIjVcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiMVwiLFxuXHRcdFx0bGV0dGVyOlwiQVwiLFxuXHRcdFx0bnVtYmVyczpcIjVcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiMVwiLFxuXHRcdFx0bGV0dGVyOlwiQVwiLFxuXHRcdFx0bnVtYmVyczpcIjVcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0bnVtYmVyOlwiMVwiLFxuXHRcdFx0bGV0dGVyOlwiQVwiLFxuXHRcdFx0bnVtYmVyczpcIjVcIlxuXHRcdH1cblx0XVxuXG5cdC8qKlxuXHQgKiB2aWV3TGlzdFxuXHQgKi9cblx0cHVibGljIHZpZXdMaXN0KCkge1xuXHRcdHRoaXMuX3JvdXRFeC5uYXZpZ2F0ZShbXCJsaXN0XCJdKVxuXHR9XG59Il19