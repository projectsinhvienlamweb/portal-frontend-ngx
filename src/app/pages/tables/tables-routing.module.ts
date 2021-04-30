import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from '../../pipes/filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: 'smart-table',
        component: SmartTableComponent,
      },
      {
        path: 'tree-grid',
        component: TreeGridComponent,
      }, {
        path: '',
        redirectTo: 'smart-table',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  TreeGridComponent,
  FilterPipe,
];