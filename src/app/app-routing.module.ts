import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },//lazy loading
  { path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule' }//lazy loading


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })

  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
