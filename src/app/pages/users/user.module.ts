import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { UserRoutingModule, routedComponents } from './user-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import { AdminQueriesService } from '../../services/admin-queries.service';
import { CustomAdminQueriesService } from '../../services/custom-admin-queries.service';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    UserRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],
  providers: [
    { provide: AdminQueriesService, useClass: CustomAdminQueriesService },
  ],
})
export class UserModule { }
