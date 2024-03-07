import { Component } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
    selector: 'loader',
    standalone: true,
    template: `
    <div class="spin">
        <nz-spin nzSimple></nz-spin>
    </div>
  `,
    styles: `.spin {
        text-align: center;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        margin-bottom: 20px;
        padding: 30px 50px;
        margin: 20px 0;
      }
    `,
    imports: [NzSpinModule]
})
export class LoaderComponent {
}
