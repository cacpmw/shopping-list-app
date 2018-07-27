import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  model: Ingredient;

  ingredient: Ingredient;
  ingredients: Ingredient[];

  startedEditingSubscription: Subscription;
  ingredientsSubscription: Subscription;

  editmode = false;

  constructor(private shoppingService: ShoppingService) {
    this.model = new Ingredient();
  }

  ngOnInit() {
    debugger;
    this.ingredients = this.shoppingService.getIngredients();

    this.startedEditingSubscription = this.shoppingService.startedEditing.subscribe((id: number) => {
      this.model = this.shoppingService.getIngredient(id);
      this.editmode = true;
    });

    this.ingredientsSubscription = this.shoppingService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }


  ngOnDestroy() {
    this.startedEditingSubscription.unsubscribe();
    this.ingredientsSubscription.unsubscribe();
  }
  add(form: NgForm) {
    debugger;
    var id = this.ingredients.length > 0 ? this.shoppingService.getIngredients()[this.ingredients.length - 1].id + 1 : 1;
    this.shoppingService.add({ id: id, name: form.value.name, amount: form.value.amount });
  }


  remove() {
    this.shoppingService.remove(this.model.id);

  }
  clear() {
    this.model.name = null;
    this.model.amount = null;
    this.model.id = null;
  }
}
