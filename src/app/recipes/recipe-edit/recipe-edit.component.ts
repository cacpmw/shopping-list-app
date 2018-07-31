import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray } from '../../../../node_modules/@angular/forms';
import { formGroupNameProvider } from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  private id: number;
  recipe: Recipe;
  recipeForm: FormGroup;
  constructor(private router: Router, private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      if (this.id) {
        this.editMode = true;
        this.recipe = this.recipeService.getRecipe(this.id);
      }
      this.initiForm();
    });
  }
  submit() {
    console.log(this.recipeForm);
  }
  private initiForm() {
    let recipeIngredients = new FormArray([]);
    if (this.recipe.ingredients) {
      this.recipe.ingredients.forEach(ingredient => {
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name),
          'amount': new FormControl(ingredient.amount)
        }));
      });
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe ? this.recipe.name : null),
      'imagePath': new FormControl(this.recipe ? this.recipe.imagePath : null),
      'description': new FormControl(this.recipe ? this.recipe.description : null),
      'ingredients': recipeIngredients

    });
  }

  newIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(),
      'amount': new FormControl()

    }));
  }

  cancel() {
    this.editMode = false;
  }

}
