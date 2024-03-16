import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneDeReponseComponent } from './ligne-de-reponse.component';

describe('LigneDeReponseComponent', () => {
  let component: LigneDeReponseComponent;
  let fixture: ComponentFixture<LigneDeReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LigneDeReponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LigneDeReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
