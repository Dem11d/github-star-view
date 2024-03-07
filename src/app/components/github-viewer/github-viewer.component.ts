import { Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RepositoryTableComponent } from "../../repository-table/repository-table.component";
import { ApiService } from '../../api/api.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoaderComponent } from "../loader/loader.component";

@Component({
    selector: 'github-viewer',
    standalone: true,
    templateUrl: './github-viewer.component.html',
    styleUrl: './github-viewer.component.css',
    imports: [NzCardModule, RepositoryTableComponent, AsyncPipe, NzSpinModule, LoaderComponent, NgIf]
})
export class GithubViewerComponent {
  private apiService = inject(ApiService);
  protected repositories$ = this.apiService.getRepositories();
}
