import { TestBed } from '@angular/core/testing';
import { NbThemeModule, NbToastrModule } from '@nebular/theme';

import { AmplifyService } from './amplify.service';

describe('AmplifyService', () => {
  let service: AmplifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NbToastrModule.forRoot()],
      providers: [NbThemeModule.forRoot().providers],
    });
    service = TestBed.inject(AmplifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
