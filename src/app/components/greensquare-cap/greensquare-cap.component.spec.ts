import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreensquareCapComponent } from './greensquare-cap.component';

describe('GreensquareCapComponent', () => {
  let component: GreensquareCapComponent;
  let fixture: ComponentFixture<GreensquareCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreensquareCapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreensquareCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
