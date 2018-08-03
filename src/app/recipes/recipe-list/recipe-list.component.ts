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

  ngOnInit() {
    this.recipeChangedSubscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy() {
    this.recipeChangedSubscription.unsubscribe();
  }
  create() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }
}
