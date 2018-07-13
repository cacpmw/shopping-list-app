import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name: string = "";
  amount: number = 0;
  ingredient: Ingredient;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  add() {
    this.shoppingService.add({ name: this.name, amount: this.amount });
  }


  remove() {
    this.shoppingService.remove({ name: this.name, amount: this.amount });

  }
  clear() {
    this.name = null;
    this.amount = null;
  }
}
