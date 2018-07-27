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

    this.ingredientsChanged.next(this.getIngredients());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);//break array into single objects
    this.ingredientsChanged.next(this.getIngredients());

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
    for (var i = this.ingredients.length - 1; i >= 0; --i) {
      if (this.ingredients[i].id == id) {
        this.ingredients.splice(i, 1);
      }
    }
    this.ingredientsChanged.next(this.getIngredients());
  }
}
