import { Injectable, EventEmitter } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "Description Recipe 1", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 1)]),
    new Recipe("Test Recipe 2", "Description Recipe 2", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 2)]),
    new Recipe("Test Recipe 3", "Description Recipe 3", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 3), new Ingredient("Meat 2", 3)]),
    new Recipe("Test Recipe 4", "Description Recipe 4", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 4)]),
    new Recipe("Test Recipe 5", "Description Recipe 5", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 5)])
  ];

  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingService: ShoppingService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);

  }
}
