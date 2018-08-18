import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingService } from './services/shopping.service';
import { RecipeService } from './services/recipe.service';
import { AppRoutingModule } from './app-routing.module';

import { DataStorageService } from './services/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './services/auth.service';
import { AuthGuardGuard } from './auth/guard/auth-guard.guard';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    RecipesModule,
    ShoppingListModule,
    AppRoutingModule
  ],
  providers: [ShoppingService, RecipeService, DataStorageService, AuthService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
