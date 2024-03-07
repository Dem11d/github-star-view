import { DatePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';

@Component({
  selector: 'repository-table',
  standalone: true,
  imports: [NzTableModule, DatePipe, NgFor],
  templateUrl: './repository-table.component.html',
  styleUrl: './repository-table.component.css'
})
export class RepositoryTableComponent {


  @Input() repositories: any[] = [];
}
