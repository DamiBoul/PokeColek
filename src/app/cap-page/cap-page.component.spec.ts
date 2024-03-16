import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapPageComponent } from './cap-page.component';

describe('CapPageComponent', () => {
  let component: CapPageComponent;
  let fixture: ComponentFixture<CapPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
