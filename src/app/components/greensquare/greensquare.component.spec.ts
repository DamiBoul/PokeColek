import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreensquareComponent } from './greensquare.component';

describe('GreensquareComponent', () => {
  let component: GreensquareComponent;
  let fixture: ComponentFixture<GreensquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreensquareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreensquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
