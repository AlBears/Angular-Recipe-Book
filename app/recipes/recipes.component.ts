import { Component } from '@angular/core';
import { Recipe } from "./recipe";
@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html'
})
export class RecipesComponent {
  selectedRecipe: Recipe;
 }
