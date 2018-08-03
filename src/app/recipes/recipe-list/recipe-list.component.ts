import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[]
  recipeChangedSubscription = new Subscription();

  constructor(private recipeService: RecipeService,
    private router: Router, private route: ActivatedRoute) { }

  //#region Documentation
  /* [ENGLISH] 
      Subscribed to the recipesChanged on the recipeService to get automatic updates on changes in the recipes array*/
  /* [PT-BR] 
      Assinado no recipesChanged do recipeService para receber atualizações automáticas das mudanças do array de recipes*/
  //#endregion
  ngOnInit() {
    this.recipeChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  //#region Documetation
  /* [EGNLISH] 
       Unsubscribe from recipesChanged on the recipeService when component is destroyed to prevent memory leak */
  /* [PT-BR] 
     Cancelado assinatura no recipesChanged do recipeService quando o componente é destruído para evitar
     vazamento de memória.*/
  //#endregion
  ngOnDestroy() {
    this.recipeChangedSubscription.unsubscribe();
  }
  create() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
