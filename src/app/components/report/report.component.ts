import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent {
  ngOnInit(): void { 
  }
  constructor(private service: ReportService) { }
  download(): void {
    this.service.download()
      .subscribe({
        next: (data) => {
          var file = new Blob([data], { type: 'application/pdf' });
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL);
        },
        error: (e) => console.error(e)
      });
  }
}
