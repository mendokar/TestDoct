import { ListComponent } from "~/pages/list/list.component";
import { ViewDataComponent } from "~/pages/view-data/view-data.component";
import { NumbersComponent } from "~/pages/numbers/numbers.component";

export const Routes = [
{path:"list",component:ListComponent},
{path:"viewData",component:ViewDataComponent},
{path:"",component:NumbersComponent}
]

export const NavegateRouters =[
    ListComponent,
    ViewDataComponent,
    NumbersComponent
]