import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-selection-list',
  templateUrl: './subject-selection-list.component.html',
  styleUrls: ['./subject-selection-list.component.scss']
})
export class SubjectSelectionListComponent {

  title = 'Assuntos';
  @Input() recordsSelected?: Subject[];
  records?: Subject[];
  record: Subject = {};
  @Output() newSelectEvent = new EventEmitter<any>();

  constructor(private service: SubjectService) { }

  ngOnInit(): void {
    this.retrieve();
  }

  isSelected(codAs: any) {
    return this.recordsSelected?.findIndex(item => item.codAs !== codAs) ;
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

  setActive(record: Subject, checked: any): void {
    this.record = record;
    this.newSelectEvent.emit({ subject: record, checked: checked.currentTarget.checked });
  }
}
