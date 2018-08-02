import { Injectable } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(1, "Test Recipe", "Description Recipe 1", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient(5, "Meat", 1)]),
    new Recipe(2, "Test Recipe 2", "Description Recipe 2", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient(6, "Meat", 2)]),
    new Recipe(3, "Test Recipe 3", "Description Recipe 3", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient(7, "Meat", 3), new Ingredient(8, "Meat 2", 3)]),
    new Recipe(4, "Test Recipe 4", "Description Recipe 4", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient(9, "Meat", 4)]),
    new Recipe(5, "Test Recipe 5", "Description Recipe 5", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg", [new Ingredient(10, "Meat", 5)])
  ];

  recipesChanged = new Subject<Recipe[]>();

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
  addRecipe(newRecipe: Recipe) {
    newRecipe.id = this.recipes.length + 1;
    this.recipes.push(newRecipe)
    //this.recipesChanged.next(this.getRecipes());
  }
  updateRecipe(id: number, updatedRecipe: Recipe) {

    for (let i = 0; i < this.recipes.length; i++) {
      if (this.recipes[i].id === id) {
        this.recipes[i].description = updatedRecipe.description;
        this.recipes[i].ingredients = updatedRecipe.ingredients;
        this.recipes[i].imagePath = updatedRecipe.imagePath;
        this.recipes[i].name = updatedRecipe.name;
        return;
      }
    }
    //this.recipesChanged.next(this.getRecipes());
  }
}
