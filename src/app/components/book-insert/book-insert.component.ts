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
  resumeTable: any = true; 
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


  addNewItem(newItem: any) { 
    this.record.priceByChannels = newItem;
  }

  addItemAuthor(newItem: any) {
    if (newItem.checked)
      this.record.authors?.push(newItem.author);
    else
      this.record.authors = this.record.authors?.filter(item => item.codAu !== newItem.author.codAu);
  }

  addItemSubject(newItem: any) {
    if (newItem.checked)
      this.record.subjects?.push(newItem.subject);
    else
      this.record.subjects = this.record.subjects?.filter(item => item.codAs !== newItem.subject.codAs);
  }

  save(): void {
    const data = {
      title: this.record.title,
      publishingCompany: this.record.publishingCompany,
      edition: this.record.edition,
      releaseYear: this.record.releaseYear,
      authors: this.record.authors,
      subjects: this.record.subjects,
      priceByChannels: this.record.priceByChannels
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
