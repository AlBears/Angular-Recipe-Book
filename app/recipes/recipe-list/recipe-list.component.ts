import { Component } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'https://images-na.ssl-images-amazon.com/images/I/51oBX5UFXNL._SL1500_.jpg')
 }
