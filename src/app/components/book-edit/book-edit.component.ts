import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent {
  title = 'Atualização de Livro';
  message = '';
  @Input() viewMode = false;
  @Input() record: Book = {
    title: '' ,
    publishingCompany: '' ,
    edition: 0, 
    releaseYear: "", 
    authors: [],
    subjects: [], 
    priceByChannels:[]
  };

  constructor(private service: BookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.get(this.route.snapshot.params["id"]);
    }
  }

  get(id: string): void {
    this.service.get(id)
      .subscribe({
        next: (data) => {
          this.record = data;
        },
        error: (e) => this.message = e.error.errors.join("<br/>") 
      });
  }

  update(): void {
    this.message = '';
    this.service.update(this.record.codL, this.record)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'Registro atualizado com sucesso!';
        },
        error: (e) => this.message = e.error.errors.join("<br/>") 
      });
  }
}
