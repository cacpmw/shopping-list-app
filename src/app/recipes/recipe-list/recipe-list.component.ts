import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Test", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 2", "Test 2", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 3", "Test 3", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 4", "Test 4", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg"),
    new Recipe("Test Recipe 5", "Test 5", "https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg")
  ];

  @Output() selectedRecipeEventEmitter = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }
  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipeEventEmitter.emit(recipe);
    console.log("recipe-list fired");

  }

}
