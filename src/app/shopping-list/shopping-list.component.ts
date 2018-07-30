import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping.service';
import { Subscription } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  private ingredientsChangedSubscription: Subscription
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    debugger;
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientsChangedSubscription = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );

  }
  edit(id: number) {
    this.shoppingService.startedEditing.next(id);
  }
  ngOnDestroy() {
    this.ingredientsChangedSubscription.unsubscribe();
  }

}
