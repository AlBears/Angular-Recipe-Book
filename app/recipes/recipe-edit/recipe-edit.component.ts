import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-edit',
  templateUrl: 'recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy { 
  private recipeIndex: number;
  private subscription: Subscription; 
    constructor(private route: ActivatedRoute, 
                private recipeservice: RecipeService ) {}
    ngOnInit(){
        let isNew = true;
        this.subscription = this.route.params.subscribe(
          (params: any) => { 
          if (params.hasOwnProperty('id')) {
            isNew = false;
            this.recipeIndex = +params['id'];
          } else {
            isNew = true;
          }
          }
        )
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }
}
