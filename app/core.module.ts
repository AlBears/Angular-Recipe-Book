import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [],
    exports: [ DropdownDirective ],
    declarations: [
        DropdownDirective,
        HomeComponent
    ],
    providers: [],
})
export class CoreModule { }
