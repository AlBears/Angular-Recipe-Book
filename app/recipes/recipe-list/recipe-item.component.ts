import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit{ 
    @Input() recipe: Recipe;
    @Input() recipeId: number;
    constructor() {}
    ngOnInit(){
      
    }
}
