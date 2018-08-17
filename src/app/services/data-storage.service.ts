import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from './recipe.service';

import 'rxjs/Rx';/* [ENGLISH] - Needed for the map() method */ /* [PT-BR] - Necessário para o método map() */
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  //#region Documentation
  /* [ENGLISH]
      Request user token. 
      Send a PUT request for recipes with an array of recipes on the body. 
  */
  /* [PT-BR]
      Requisita o token do usuario. 
      Envia uma requisição PUT com uma lista de recipes no body. 
  */
  //#endregion
  postRecipe() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-shopping-list-542c1.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
      .map(
        (response: Response) => {
          return response.json();
        }
      )
  }

  //#region Documentation
  /* [ENGLISH]
      Request user token. 
      Send a GET request for recipes. 
      Assign the response array to a variable.
      Iterate through itens checking if they have a ingredients attribute. 
      Assign empty list in case they haven't */
  /* [PT-BR]
      Requisita o token do usuario. 
      Envia uma requisição GET para buscar uma lista recipes. 
      Atribui a resposta a uma variavel.
      Realiza iteração no array de recipes checando se cada item possui o atributo ingredients.
      Atribui uma lista vazia caso o item atual não possua o atributo ingredients.
                    */
  //#endregion
  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get('https://ng-shopping-list-542c1.firebaseio.com/recipes.json?auth=' + token).map(
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
