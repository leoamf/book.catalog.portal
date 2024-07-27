import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'src/app/models/subject.model';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.scss']
})
export class SubjectEditComponent {
  title = 'Atualização de Assunto';
  message = '';
  @Input() viewMode = false;
  @Input() record: Subject = {
    description: ''
  };

  constructor(private service: SubjectService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.get(this.route.snapshot.params["id"]);
    }
  }

  get(id: string): void {
    this.service.get(id)
      .subscribe({
        next: (data) => {
          this.record = data;
        },
        error: (e) => this.message = e.error.errors.join("<br/>") 
      });
  }

  update(): void {
    this.message = '';
    this.service.update(this.record.codAs, this.record)
      .subscribe({
        next: (res) => {
          this.message = res.message ? res.message : 'Registro atualizado com sucesso!';
        },
        error: (e) => this.message = e.error.errors.join("<br/>") 
      });
  }
}
