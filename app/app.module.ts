import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShoppingListModule } from './shopping-list/shopping-list.module';


import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { DropdownDirective } from './dropdown.directive';
import { HomeComponent } from './home.component';

import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
  imports:      [ BrowserModule, 
                  routing,
                  HttpModule,
                  ShoppingListModule,
                  ],
  declarations: [ AppComponent, 
                  HeaderComponent, 
                  DropdownDirective,
                  HomeComponent
                 ],
  bootstrap:    [ AppComponent ],
  providers:    [ RecipeService,
                  ShoppingListService,
                  ]
})
export class AppModule { }
