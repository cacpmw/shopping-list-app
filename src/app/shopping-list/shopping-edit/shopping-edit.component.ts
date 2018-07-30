import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../services/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') shoppingListForm: NgForm;
  model: Ingredient;

  ingredient: Ingredient;
  ingredients: Ingredient[];

  startedEditingSubscription: Subscription;
  ingredientsSubscription: Subscription;

  editMode = false;

  constructor(private shoppingService: ShoppingService) {
    this.model = new Ingredient();
  }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();
    this.startedEditingSubscription = this.shoppingService.startedEditing.subscribe((id: number) => {
      var ingredient = this.shoppingService.getIngredient(id);
      this.model.name = ingredient.name;
      this.model.amount = ingredient.amount;
      this.model.id = ingredient.id;
      this.editMode = true;
      //unnecessary due to 2 way data binding
      /* this.shoppingListForm.setValue({
        name: this.model.name,
        amount: this.model.amount,
        id: this.model.id
      }); */
    });
    this.ingredientsSubscription = this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }


  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
    this.ingredientsSubscription.unsubscribe();
  }
  submit(form: NgForm) {
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.model);

    } else {
      var id = this.ingredients.length > 0 ? this.shoppingService.getIngredients()[this.ingredients.length - 1].id + 1 : 1;
      this.shoppingService.add({ id: id, name: form.value.name, amount: form.value.amount });

    }
    this.clear();
  }


  remove() {
    this.shoppingService.remove(this.model.id);
    this.clear();

  }
  clear() {
    this.shoppingListForm.reset();
    //another way to reset the form fields
    /*  this.model.name = null;
     this.model.amount = null;
     this.model.id = null; */
    this.editMode = false;
  }
}
