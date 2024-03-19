import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollekComponent } from './collek.component';

describe('CollekComponent', () => {
  let component: CollekComponent;
  let fixture: ComponentFixture<CollekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
