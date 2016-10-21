import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  HeaderComponent, 
                  RecipesComponent,
                  RecipeListComponent,
                  RecipeItemComponent,
                  RecipeDetailComponent,
                  ShoppingListComponent,
                  ShoppingListAddComponent,
                  DropdownDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
