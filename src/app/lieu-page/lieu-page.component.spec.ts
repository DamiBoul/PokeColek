import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuPageComponent } from './lieu-page.component';

describe('LieuPageComponent', () => {
  let component: LieuPageComponent;
  let fixture: ComponentFixture<LieuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LieuPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LieuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
