import { Component, Input } from '@angular/core'; 
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  
  title = 'Livro';
  records?: Book[];
  record: Book = {}; 

  constructor(private service: BookService) { }

  ngOnInit(): void {
    this.retrieve();
  }

  retrieve(): void {
    this.service.getAll()
      .subscribe({
        next: (data) => {
          this.records = data;
        },
        error: (e) => console.error(e)
      });
  }
  delete(id: any): void {
    this.service.delete(id)
      .subscribe({
        next: () => {
          this.retrieve();
        },
        error: (e) => console.error(e)
      });
  }
  refresh(): void {
    this.retrieve();
    this.record = {};
  }

  setActive(record: Book): void {
    this.record = record;
  } 
}
