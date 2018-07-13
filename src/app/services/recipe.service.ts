import { Injectable } from '@angular/core';
import { ShoppingService } from './shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private shoppingService: ShoppingService) { }
}
