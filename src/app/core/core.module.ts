import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuardGuard } from '../auth/guard/auth-guard.guard';
import { AuthService } from '../services/auth.service';
import { DataStorageService } from '../services/data-storage.service';
import { RecipeService } from '../services/recipe.service';
import { ShoppingService } from '../services/shopping.service';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule,

  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
  ],
  providers: [
    ShoppingService,
    RecipeService,
    DataStorageService,
    AuthService,
    AuthGuardGuard
  ]
})
export class CoreModule { }
