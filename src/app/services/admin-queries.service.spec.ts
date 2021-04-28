import { TestBed } from '@angular/core/testing';
import { NbThemeModule, NbToastrModule } from '@nebular/theme';

import { AdminQueriesService } from './admin-queries.service';

describe('AdminQueriesService', () => {
  let service: AdminQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NbToastrModule.forRoot()],
      providers: [NbThemeModule.forRoot().providers],
    });
    service = TestBed.inject(AdminQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
