import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
    new Ingredient("Eggs", 7),
    new Ingredient("Milk", 2),
  ];
  constructor() { }

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  remove(ingredient: Ingredient) {
    for (var i = this.ingredients.length - 1; i >= 0; --i) {
      if (this.ingredients[i].name == ingredient.name) {
        this.ingredients.splice(i, 1);
      }
    }
  }
}
