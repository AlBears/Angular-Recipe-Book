import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
                  HeaderComponent, 
                  RecipesComponent,
                  RecipeListComponent,
                  RecipeItemComponent,
                  RecipeDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
