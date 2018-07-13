import { Injectable,EventEmitter } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 2", "Test 2", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 3", "Test 3", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 4", "Test 4", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 5", "Test 5", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg")
  ];

  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingService: ShoppingService) { }

  getRecipes() {
    return this.recipes.slice();
  }
}
