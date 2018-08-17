import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardGuard } from './auth/guard/auth-guard.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardGuard] },
      { path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuardGuard]  },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardGuard] }
    ]
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'signin', component: SigninComponent
  },

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
