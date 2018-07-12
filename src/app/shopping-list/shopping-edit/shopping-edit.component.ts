import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string = "";
  amount: number = 0;
  ingredient: Ingredient;
  @Output() createdIngredient = new EventEmitter<Ingredient>();
  @Output() removedIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onCreate(ingredient: Ingredient) {
    this.createdIngredient.emit(ingredient);

  }
  onAdd() {
    if (this.name.length > 0 && this.amount > 0) {
      this.ingredient = new Ingredient(this.name, this.amount);
      this.onCreate(this.ingredient);
    }
  }

  onDelete() {
    if (this.name.length > 0) {
      this.ingredient = new Ingredient(this.name, 0);
      this.onRemove(this.ingredient);
    }
  }
  onRemove(ingredient: Ingredient) {
    this.removedIngredient.emit(ingredient);

  }
  onClear() {
    
    this.name = null;
    this.amount = null;

  }
}
