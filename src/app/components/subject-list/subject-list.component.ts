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
  refreshList(): void {
    this.retrieve();
    this.record = {};
  }

  setActive(record: Subject): void {
    this.record = record;
  } 
}
