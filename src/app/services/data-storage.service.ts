import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';
import 'rxjs/Rx';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  postRecipe() {
    return this.http.put('https://ng-shopping-list-542c1.firebaseio.com/recipes.json', this.recipeService.getRecipes())
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  getRecipes() {
    return this.http.get('https://ng-shopping-list-542c1.firebaseio.com/recipes.json').map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );

  }
}
