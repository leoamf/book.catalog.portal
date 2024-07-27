import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-author-selection-list',
  templateUrl: './author-selection-list.component.html',
  styleUrls: ['./author-selection-list.component.scss']
})
export class AuthorSelectionListComponent {

  title = 'Autores';
  records?: Author[];
  record: Author = {};
  @Input() recordsSelected?: Author[];
  @Output() newSelectEvent = new EventEmitter<any>();

  constructor(private service: AuthorService) { }

  ngOnInit(): void {
    this.retrieve();
  }
  isSelected(codAu: any) {
    return this.recordsSelected?.findIndex(item => item.codAu !== codAu) ;
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

  refresh(): void {
    this.retrieve();
    this.record = {};
  }

  setActive(record: Author, checked: any): void {
    this.record = record;
    this.newSelectEvent.emit({ author: record, checked: checked.currentTarget.checked });
  }
}
