import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-insert',
  templateUrl: './author-insert.component.html',
  styleUrls: ['./author-insert.component.scss']
})
export class AuthorInsertComponent implements OnInit {
  title = 'Inserir Autor';
  record: Author = { name: '' };
  inserted = false;
  message = '';
  constructor(private service: AuthorService) { }

  ngOnInit(): void {
  }
  save(): void {
    const data = {
      name: this.record.name
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
    this.record = { name: '' };
  }
}
