import { TestBed } from '@angular/core/testing';
import { PremierePageComponent } from './premiere-page.component';

describe('PremierePageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremierePageComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PremierePageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(PremierePageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, dashfront');
  });
});

