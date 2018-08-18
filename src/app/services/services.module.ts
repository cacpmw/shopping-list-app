import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { DataStorageService } from "./data-storage.service";
import { RecipeService } from "./recipe.service";
import { ShoppingService } from "./shopping.service";
import { AuthGuardGuard } from "../auth/guard/auth-guard.guard";

@NgModule({
    declarations: [
        AuthService,
        AuthGuardGuard,
        DataStorageService,
        RecipeService,
        ShoppingService
    ],
    providers: [
        AuthService,
        AuthGuardGuard,
        DataStorageService,
        RecipeService,
        ShoppingService
    ],
    exports: [AuthService,
        AuthGuardGuard,
        DataStorageService,
        RecipeService,
        ShoppingService
    ]
})
export class ServicesModule { }