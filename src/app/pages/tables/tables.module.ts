import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NbCardModule, NbDatepickerModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { SmartTableDatepickerComponent, SmartTableDatepickerRenderComponent } from './smart-table-datepicker/smart-table-datepicker.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SmartTableValidationComponent } from './smart-table-validation/smart-table-validation.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbDatepickerModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
    SmartTableValidationComponent,
  ],
  entryComponents: [
    SmartTableDatepickerComponent,
    SmartTableDatepickerRenderComponent,
    SmartTableValidationComponent,
  ],
})
export class TablesModule { }
