import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreensquareLieuComponent } from './greensquare-lieu.component';

describe('GreensquareLieuComponent', () => {
  let component: GreensquareLieuComponent;
  let fixture: ComponentFixture<GreensquareLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreensquareLieuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreensquareLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
