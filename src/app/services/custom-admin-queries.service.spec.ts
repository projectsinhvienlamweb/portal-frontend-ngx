import { TestBed } from '@angular/core/testing';
import { NbThemeModule, NbToastrModule } from '@nebular/theme';
import { UserService } from '../@core/mock/users.service';

import { CustomAdminQueriesService } from './custom-admin-queries.service';

describe('CustomAdminQueriesService', () => {
  let service: CustomAdminQueriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NbToastrModule.forRoot()],
      providers: [NbThemeModule.forRoot().providers, UserService],
    });
    service = TestBed.inject(CustomAdminQueriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
