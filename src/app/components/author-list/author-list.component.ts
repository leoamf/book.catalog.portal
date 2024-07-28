import { Component } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent {

  title = 'Autores';
  records?: Author[];
  record: Author = {}; 
  message = '';
  constructor(private service: AuthorService) { }

  ngOnInit(): void {
    this.retrieve();
  }

  retrieve(): void {
    this.service.getAll()
      .subscribe({
        next: (data) => {
          this.records = data;
        },
        error: (e) => this.message = e.error.message 
      });
  }
  delete(id: any): void {
    this.service.delete(id)
      .subscribe({
        next: () => {
          this.retrieve();
        },
        error: (e) => this.message = e.error.message 
      });
  }
  refresh(): void {
    this.retrieve();
    this.record = {};
  }

  setActive(record: Author): void {
    this.record = record;
  } 
} 
