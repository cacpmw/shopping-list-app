import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
    new Ingredient("Eggs", 7),
    new Ingredient("Milk", 2),
  ];
  constructor() { }

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient);

    this.ingredientsChanged.next(this.getIngredients());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);//break array into single objects
    this.ingredientsChanged.next(this.getIngredients());

  }

  getIngredients() {
    return this.ingredients.slice();
  }
  remove(ingredient: Ingredient) {
    for (var i = this.ingredients.length - 1; i >= 0; --i) {
      if (this.ingredients[i].name == ingredient.name) {
        this.ingredients.splice(i, 1);
      }
    }
    this.ingredientsChanged.next(this.getIngredients());
  }
}
