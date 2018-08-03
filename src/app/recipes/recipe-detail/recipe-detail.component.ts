import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  //#region Documentation
  /* [EGNLISH] 
     Subscribed to the route params in order to automatically 
     retrive the recipe object whenever URL ID parameters changes */
  /* [PT-BR] 
     Assinado no route params para automaticamente regastar o
     objeto do tipo recipe toda vez que o parametro ID da URL mudar.
     */
  //#endregion
  ngOnInit() {
    this.route.params
      .subscribe((param: Params) => {
        this.recipe = this.recipeService.getRecipe(+param['id']);
      })
  }

  add() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  delete() {
    this.recipeService.removeRecipe(this.recipe.id);
    this.router.navigate(['recipes']);
  }
}
