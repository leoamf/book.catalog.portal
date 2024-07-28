import { Component } from '@angular/core';
import { Subject } from 'src/app/models/subject.model'; 
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent {
  records?: Subject[];
  record: Subject = {}; 
  title = 'Assuntos';
  message = '';
  constructor(private service: SubjectService) { }

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
  refreshList(): void {
    this.retrieve();
    this.record = {};
  }

  setActive(record: Subject): void {
    this.record = record;
  } 
}
