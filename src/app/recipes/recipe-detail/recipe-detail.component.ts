import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe;
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe((param: Params) => {
        this.recipe = this.recipeService.getRecipe(+param['id']);
      })
  }

  add() {
    this.recipeService.addToShoppingList(this.recipe);
  }
  edit() {
    this.router.navigate(['edit'], { relativeTo: this.route });


  }
}
