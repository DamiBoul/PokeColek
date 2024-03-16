import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCollek } from './element-collek.component';

describe('ElementCollekComponent', () => {
  let component: ElementCollek;
  let fixture: ComponentFixture<ElementCollek>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElementCollek]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElementCollek);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
