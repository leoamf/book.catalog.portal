import { Component } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-insert',
  templateUrl: './book-insert.component.html',
  styleUrls: ['./book-insert.component.scss']
})
export class BookInsertComponent {
  title = 'Inserir Livro';
  record: Book = {
    title: '',
    publishingCompany: '',
    edition: 0,
    releaseYear: "",
    authors: [],
    subjects: [],
    priceByChannels: []
  };
  inserted = false;
  message = '';
  constructor(private service: BookService) { }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
      title: this.record.title,
      publishingCompany: this.record.publishingCompany,
      edition: this.record.edition,
      releaseYear: this.record.releaseYear,
      authors: [],
      subjects: [],
      priceByChannels: []
    };

    this.service.create(data)
      .subscribe({
        next: (res) => {
          this.inserted = true;
        },
        error: (e) => this.message = e.error.errors.join("<br/>")
      });
  }

  new(): void {
    this.inserted = false;
    this.record = {
      title: '',
      publishingCompany: '',
      edition: 0,
      releaseYear: "",
      authors: [],
      subjects: [],
      priceByChannels: []
    };
  }
}
