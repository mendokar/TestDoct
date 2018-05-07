import { ListComponent } from "~/pages/list/list.component";
import { ViewDataComponent } from "~/pages/view-data/view-data.component";

export const Routes = [
{path:"",component:ListComponent},
{path:"viewData",component:ViewDataComponent}
]

export const NavegateRouters =[
    ListComponent,
    ViewDataComponent
]