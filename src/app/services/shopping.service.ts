import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';


@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient(1, "Apples", 5),
    new Ingredient(2, "Tomatoes", 10),
    new Ingredient(3, "Eggs", 7),
    new Ingredient(4, "Milk", 2),
  ];
  constructor() { }

  add(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.emitIngredientsChange();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);//break array into single objects
    this.emitIngredientsChange();
  }
  updateIngredient(selectedIngredient: Ingredient) {
    this.ingredients.forEach(ingredient => {
      if (ingredient.id === selectedIngredient.id) {
        ingredient.amount = selectedIngredient.amount;
        ingredient.name = selectedIngredient.name;
      }
    });
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id: number) {
    let selectedIngredient: Ingredient;
    this.ingredients.forEach(ingredient => {
      if (id === ingredient.id) {
        selectedIngredient = ingredient;
      }
    });
    return selectedIngredient;
  }
  remove(id: number) {
   
    let index: number;
    this.ingredients.forEach(ingredient => {
      if (id === ingredient.id) {
        index = this.ingredients.indexOf(ingredient);
      }
    });
    this.ingredients.splice(index, 1);
    this.emitIngredientsChange();
  }

  emitIngredientsChange() {
    this.ingredientsChanged.next(this.getIngredients());
  }
}
