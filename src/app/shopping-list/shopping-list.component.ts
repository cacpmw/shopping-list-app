import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
    new Ingredient("Eggs", 7),
    new Ingredient("Milk", 2),
  ];

  constructor() { }

  ngOnInit() {
  }
  onIngredientCreated(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  onIngredienteRemoved(ingredient: Ingredient) {
    for (var i = this.ingredients.length - 1; i >= 0; --i) {
      if (this.ingredients[i].name == ingredient.name) {
        this.ingredients.splice(i, 1);
      }
    }
  }
}
