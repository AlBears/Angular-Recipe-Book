import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';

@NgModule({
    declarations: [ 
        ShoppingListComponent,
        ShoppingListAddComponent
    ],
    imports: [ 
        FormsModule, 
        SharedModule 
        ],
    exports: [ ShoppingListComponent ]

})
export class ShoppingListModule {}