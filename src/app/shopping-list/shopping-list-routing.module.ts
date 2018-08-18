import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ShoppingListComponent } from "./shopping-list.component";
import { AuthGuardGuard } from "../auth/guard/auth-guard.guard";

const shoppingListRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuardGuard] },
];
@NgModule({
    imports: [CommonModule,
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule { }