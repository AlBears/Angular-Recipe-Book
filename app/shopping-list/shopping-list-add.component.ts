import { Component, Input, OnChanges } from '@angular/core';
import { Ingredient } from '../shared/ingredient';
import { ShoppingListService } from './shopping-list.service';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list-add',
  templateUrl: 'shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  isAdd = true;

 constructor(private sls: ShoppingListService){}

 ngOnChanges(changes){
   if(changes.item.currentValue === null){
     this.isAdd = true;
     this.item = {name: null, amount: null};
   } else {
     this.isAdd = false;
   }
 }

 onSubmit(ingerdient: Ingredient){
   const newIngredient = new Ingredient(ingerdient.name, ingerdient.amount);
   if(!this.isAdd){
     this.sls.editItem(this.item, newIngredient);
   } else {
     this.item = newIngredient;
     this.sls.addItem(this.item);
   }
   
 }
 }