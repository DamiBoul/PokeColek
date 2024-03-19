import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreensquareObjetComponent } from './greensquare-objet.component';

describe('GreensquareObjetComponent', () => {
  let component: GreensquareObjetComponent;
  let fixture: ComponentFixture<GreensquareObjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreensquareObjetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreensquareObjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
