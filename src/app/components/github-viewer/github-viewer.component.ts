import { Component, inject } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { RepositoryTableComponent } from "../../repository-table/repository-table.component";
import { ApiService } from '../../api/api.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LoaderComponent } from "../loader/loader.component";
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'github-viewer',
    standalone: true,
    templateUrl: './github-viewer.component.html',
    styleUrl: './github-viewer.component.css',
    imports: [NzCardModule, RepositoryTableComponent, AsyncPipe, NzSpinModule, LoaderComponent, NgIf, NzSwitchModule, FormsModule]
})
export class GithubViewerComponent {
  private apiService = inject(ApiService);
  protected repositories$ = this.apiService.getRepositories();
  protected pageIndex = 1;
  protected filter: Record<string, number> ={};

  protected favorite = JSON.parse(localStorage.getItem('favorite')|| '[]');

  handleChangePageNumber(page: number){
    this.pageIndex = page;
    this.repositories$ = this.apiService.getRepositories(page, this.filter);
  }

  handleFilterChange(filter: Record<string, number>){
    this.filter = filter;
    this.pageIndex = 1;
    this.repositories$ = this.apiService.getRepositories(1, filter);
  }

  handleUpdateFavorite(ids: number[]){
    this.favorite = ids;
    localStorage.setItem('favorite', JSON.stringify(ids));
  }
}
