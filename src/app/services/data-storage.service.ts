import { Injectable } from '@angular/core';

import { RecipeService } from './recipe.service';

import 'rxjs/Rx';/* [ENGLISH] - Needed for the map() method */ /* [PT-BR] - Necessário para o método map() */
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient,
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
    const url = environment.firebaseurl + 'recipes.json';
    const headers = new HttpHeaders();//not used with firebase. Should be added in the options object
    headers.set('Authorization', 'Bearer ' + token)
    return this.httpClient.put(url, this.recipeService.getRecipes(), {observe:'body', params: new HttpParams().set('auth', token), reportProgress:true })
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
    const url = environment.firebaseurl + 'recipes.json';
    // return this.httpClient.get<Recipe[]>(url + token).map(
    return this.httpClient.get<Recipe[]>(url,
      {//this is the default behavior, therefore unecessary but does no harm
        observe: 'body',
        responseType: 'json',
        params: new HttpParams().set('auth', token)//could be done directly on the URL
      }).map(
        (recipes) => {
          console.log(recipes);
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
