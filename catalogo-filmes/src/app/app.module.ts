import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DetailsComponent } from './components/details/details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SlideComponent } from './components/slide/slide.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    SearchComponent,
    HomeComponent,
    CategoriesComponent,
    DetailsComponent,
    PageNotFoundComponent,
    PaginationComponent,
    LoadingComponent,
    SlideComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
