import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCollekComponent } from './element-collek.component';

describe('ElementCollekComponent', () => {
  let component: ElementCollekComponent;
  let fixture: ComponentFixture<ElementCollekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementCollekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementCollekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
