import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonregleComponent } from './boutonregle.component';

describe('BoutonregleComponent', () => {
  let component: BoutonregleComponent;
  let fixture: ComponentFixture<BoutonregleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonregleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutonregleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
