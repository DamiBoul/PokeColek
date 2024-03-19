import { TestBed } from '@angular/core/testing';

import { SettingService } from './settings-service.service';

describe('SettingsServiceService', () => {
  let service: SettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
