import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Traduction } from './traduction.component';

describe('TraductionComponent', () => {
  let component: Traduction;
  let fixture: ComponentFixture<Traduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Traduction]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Traduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
