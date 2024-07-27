import { Component, Input } from '@angular/core';
import { Author } from 'src/app/models/author.model';
import { AuthorService } from 'src/app/services/author.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent {
  title = 'Atualização de Autores';
  message = '';
  @Input() viewMode = false;
  @Input() record: Author = {
    name: ''
  };

  constructor(private service: AuthorService,
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
    this.service.update(this.record.codAu, this.record)
    .subscribe({
      next: (res) => {
        this.message = res.message ? res.message : 'Registro atualizado com sucesso!';
      },
      error: (e) => this.message = e.error.errors.join("<br/>") 
    });
  }

}
