import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingService } from './services/shopping.service';
import { RecipeService } from './services/recipe.service';
import { AppRoutingModule } from './app-routing.module';

import { DataStorageService } from './services/data-storage.service';
import { AuthService } from './services/auth.service';
import { AuthGuardGuard } from './auth/guard/auth-guard.guard';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    AppRoutingModule,
    ShoppingListModule,
    AuthModule,
  ],
  providers: [ShoppingService, RecipeService, DataStorageService, AuthService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
