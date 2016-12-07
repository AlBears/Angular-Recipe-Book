import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core.module';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';

import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
  imports:      [ BrowserModule, 
                  routing,
                  HttpModule,
                  ShoppingListModule,
                  CoreModule
                  ],
  declarations: [ AppComponent, 
                  HeaderComponent, 
                 ],
  bootstrap:    [ AppComponent ],
  providers:    [ RecipeService,
                  ShoppingListService,
                  ]
})
export class AppModule { }
