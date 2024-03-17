import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cap} from './cap.component';

describe('CapComponent', () => {
  let component: Cap;
  let fixture: ComponentFixture<Cap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cap]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Cap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
