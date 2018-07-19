import { Injectable } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, "Test Recipe", "Description Recipe 1", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 1)]),
    new Recipe(2, "Test Recipe 2", "Description Recipe 2", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 2)]),
    new Recipe(3, "Test Recipe 3", "Description Recipe 3", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 3), new Ingredient("Meat 2", 3)]),
    new Recipe(4, "Test Recipe 4", "Description Recipe 4", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 4)]),
    new Recipe(5, "Test Recipe 5", "Description Recipe 5", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient("Meat", 5)])
  ];

  
  constructor(private shoppingService: ShoppingService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes.slice().find(recipe => recipe.id === id);
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
