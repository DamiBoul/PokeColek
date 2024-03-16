import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Objet } from './objet.component';

describe('ObjetComponent', () => {
  let component: Objet;
  let fixture: ComponentFixture<Objet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Objet]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Objet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
