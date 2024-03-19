import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabReponseComponent } from './tab-reponse.component';

describe('TabReponseComponent', () => {
  let component: TabReponseComponent;
  let fixture: ComponentFixture<TabReponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabReponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabReponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
