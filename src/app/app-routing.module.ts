import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorInsertComponent } from './components/author-insert/author-insert.component';
import { AuthorEditComponent } from './components/author-edit/author-edit.component';
import { SubjectEditComponent } from './components/subject-edit/subject-edit.component';
import { SubjectInsertComponent } from './components/subject-insert/subject-insert.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';
import { BookInsertComponent } from './components/book-insert/book-insert.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'autor', component: AuthorListComponent }, 
  { path: 'autor/insert', component: AuthorInsertComponent },
  { path: 'autor/edit/:id', component: AuthorEditComponent  },
  { path: 'assunto', component: SubjectListComponent },
  { path: 'assunto/edit/:id', component: SubjectEditComponent  },
  { path: 'assunto/insert', component: SubjectInsertComponent },
  { path: 'livro', component: BookListComponent },
  { path: 'livro/edit/:id', component: BookEditComponent  },
  { path: 'livro/insert', component: BookInsertComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
