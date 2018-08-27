import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../recipe.model';
//#region Documentation
/* [EGNLISH] 
    This file is a reactive form sample */
/* [PT-BR] 
    Este arquivo contêm código de exemplo de reactive form*/
//#endregion
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

  //#region Documentation
  /* [ENGLISH] 
      Check if the request has an ID so it can bring the corresponding recipe object to be edited.
      Also initialize the reactive form controls*/
  /* [PT-BR] 
      Check se a requisição possui um ID e então busca a objeto receita correspondente para ser editado.
      Alem disso inicializa os controls do reactive form*/
  //#endregion
  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      if (this.id) {
        this.editMode = true;
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    });
    this.initForm();
  }

  //#region Documentation
  /* [ENGLISH]
      Check wether the user is editing or creating new recipe and submit the data to the service */
  /* [PT-BR]
      Checa se o usuário está editando ou criando uma nova receita e envia o formulário para o serviço*/
  //#endregion
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
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  private initForm() {
    let recipeIngredients = new FormArray([]);
    if (this.editMode && this.recipe.ingredients) {
      this.recipe.ingredients.forEach(ingredient => {
        recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.min(1)])
        }));
      });
    } else {
      recipeIngredients.push(new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(1, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.min(1)])
      }));
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.recipe ? this.recipe.name : null, Validators.required),
      'imagePath': new FormControl(this.recipe ? this.recipe.imagePath : null, Validators.required),
      'description': new FormControl(this.recipe ? this.recipe.description : null, Validators.required),
      'ingredients': recipeIngredients

    });
  }

  //#region Documentation
  /*  [ENGLISH] 
      Add two new inputs (name and amount) to the ingredients array in the edit and new recipe form.
      Binded to CLICK event in the recipe-edit.component.html  */
  /*  [PT-BR] 
     Adiciona 2 novos inputs (name e amount) ao array de ingredients no formulario de editar e adicionar nova receita.
     vinculado ao evento CLICK no arquivo recipe-edit.component.html*/
  //#endregion
  newIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(1, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/), Validators.min(1)])
    }));
  }

  cancel() {
    this.editMode = false;
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  //#region Documentation 
  /*[ENGLISH]  
      Prevent user from typing a number lower than 1 in the edit and new recipe form.
      Binded to KEYUP and CLICK events in the recipe-edit.component.html 
  */
  /*[PT-BR] 
      Impede o usuário de digitar um número menor que 1 no formularo de edição e de nova receita. 
      vinculado aos eventos KEYUP e CLICK no arquivo recipe-edit.component.html*/
  //#endregion
  /*   minValue() {
      let formArray = <FormArray>(this.recipeForm.controls['ingredients']);
      formArray.controls.forEach(control => {
        if (+control.get('amount').value < 1 || isNaN(+control.get('amount').value)) {
          control.get('amount').setValue(1);
        }
      });
    } */

  clear() {
    this.recipeForm.reset();
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
}
