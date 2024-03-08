import { DatePipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EventEmitter } from  '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'repository-table',
  standalone: true,
  imports: [
    NzTableModule,
     DatePipe,
      NgFor,
       NzImageModule,
        NzIconModule,
         FormsModule, 
         NzDropDownModule, 
         NgTemplateOutlet,
          NzInputNumberModule,
           NzButtonModule, 
           NgIf
          ],
  templateUrl: './repository-table.component.html',
  styleUrl: './repository-table.component.css'
})
export class RepositoryTableComponent {


  @Input() repositories: any;
  @Input() page: number = 1;
  @Input() favorite: number[] = [];

  @Input() filter: Record<string, number> = {
    minStars :1,
    maxStars: 1_000_000
  };
  @Output() updateFavorite: EventEmitter<number[]> = new EventEmitter<number[]>();

  @Output() pageIndexChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() filterChange: EventEmitter<Record<string, number>> = new EventEmitter<Record<string, number>>();

  filterVisible = false;

  applyFilter() {
    console.log(this.filter);
    this.filterChange.emit(this.filter)
  }

  handleAddToFavorite(id: number){
    this.updateFavorite.emit([...this.favorite, id])
  }

  handleRemoveFromFavorite(id: number){
    this.updateFavorite.emit(this.favorite.filter(i => i !== id));
  }
}
