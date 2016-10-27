import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeSevice: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeSevice.getRecipes();
  }

  onSelected(recipe: Recipe) {
 
  }

}
