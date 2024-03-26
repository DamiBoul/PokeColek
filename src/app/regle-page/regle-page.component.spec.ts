import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglePageComponent } from './regle-page.component';

describe('ReglePageComponent', () => {
  let component: ReglePageComponent;
  let fixture: ComponentFixture<ReglePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReglePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReglePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
