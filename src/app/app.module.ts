import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './components/main-nav/main-nav.component'; 
import { HomeComponent } from './components/home/home.component'; 
import { BookListComponent } from './components/book-list/book-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorInsertComponent } from './components/author-insert/author-insert.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { FormsModule } from '@angular/forms';
import { SubjectEditComponent } from './components/subject-edit/subject-edit.component';
import { SubjectInsertComponent } from './components/subject-insert/subject-insert.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookInsertComponent } from './components/book-insert/book-insert.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AuthorListComponent,
    HomeComponent,
    SubjectListComponent,
    BookListComponent,
    AuthorInsertComponent,
    AuthorEditComponent,
    SubjectEditComponent,
    SubjectInsertComponent,
    BookEditComponent,
    BookInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
