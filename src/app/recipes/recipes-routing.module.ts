import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuardGuard } from "../auth/guard/auth-guard.guard";

const recipesRoutes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, children: [
          { path: '', component: RecipeStartComponent },
          { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardGuard] },
          { path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuardGuard]  },
          { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardGuard] }
        ]
      },
];
@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }