import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent {
  item: Ingredient;
  isAdd = true;

 constructor(private sls: ShoppingListService){}

 onSubmit(ingerdient: Ingredient){
   if(!this.isAdd){
     //Edit
   } else {
     this.item = new Ingredient(ingerdient.name, ingerdient.amount);
     this.sls.addItem(this.item);
   }
   
 }
 }