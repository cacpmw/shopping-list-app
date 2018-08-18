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
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component:HomeComponent },
  
 

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
