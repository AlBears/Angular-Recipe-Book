import { Component } from '@angular/core';
import { Ingredient } from "../shared/ingredient";

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html'
})
export class ShoppingListComponent {
  items: Ingredient[] = [];

 }
