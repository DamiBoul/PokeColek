import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetPageComponent } from './objet-page.component';

describe('ObjetPageComponent', () => {
  let component: ObjetPageComponent;
  let fixture: ComponentFixture<ObjetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
