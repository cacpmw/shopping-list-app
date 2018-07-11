import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  @Output() selectedRecipeOutPut = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  onClickedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
  }

  onRecipeSelected() {
    this.selectedRecipeOutPut.emit(this.selectedRecipe);
  }

}
