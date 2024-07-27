import { Component } from '@angular/core';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-insert',
  templateUrl: './subject-insert.component.html',
  styleUrls: ['./subject-insert.component.scss']
})
export class SubjectInsertComponent {
  title = 'Inserir Assunto';
  record: Subject = { description: '' };
  inserted = false;
  message = '';
  constructor(private service: SubjectService) { }

  ngOnInit(): void {
  }
  save(): void {
    const data = {
      description: this.record.description
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
    this.record = { description: '' };
  }
}
