import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '../../../../node_modules/@angular/forms';


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
    });
    this.initiForm();
  }
  submit() {
    if (this.editMode) {
      /*  const updatedRecipe = new Recipe(this.id, this.recipeForm.value['name'],
         this.recipeForm.value['description'],
         this.recipeForm.value['imagePath'],
         this.recipeForm.value['ingredients']);
       this.recipeService.updateRecipe(this.id, updatedRecipe) */

      /* because the form has the same exact format of the recipe model we can simply pass the form value */
      this.recipeService.updateRecipe(this.id, this.recipeForm.value)
    } else {
      const newRecipe = new Recipe(0, this.recipeForm.value['name'],
        this.recipeForm.value['description'],
        this.recipeForm.value['imagePath'],
        this.recipeForm.value['ingredients']);
      this.recipeService.addRecipe(newRecipe);
    }
  }
  private initiForm() {
    let recipeIngredients = new FormArray([]);
    if (this.recipe.ingredients) {
      this.recipe.ingredients.forEach(ingredient => {
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.min(1)])
        }));
      });
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe ? this.recipe.name : null, Validators.required),
      'imagePath': new FormControl(this.recipe ? this.recipe.imagePath : null, Validators.required),
      'description': new FormControl(this.recipe ? this.recipe.description : null, Validators.required),
      'ingredients': recipeIngredients

    });
  }

  newIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.min(1)])

    }));
  }

  cancel() {
    this.editMode = false;
  }

  minValue() {
    let formArray = <FormArray>(this.recipeForm.controls['ingredients']);
    formArray.controls.forEach(control => {
      if (+control.get('amount').value < 1 || isNaN(+control.get('amount').value)) {
        control.get('amount').setValue(1);
      }
    });
  }

}
