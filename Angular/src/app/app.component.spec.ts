import { TestBed, async } from '@angular/core/testing';
<<<<<<< HEAD
<<<<<<< HEAD
import { RouterTestingModule } from '@angular/router/testing';
=======
>>>>>>> Gael_Ngouana
=======
import { RouterTestingModule } from '@angular/router/testing';
>>>>>>> d9296d760cbbd49d4e7000258e2489d7fd58631d
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
<<<<<<< HEAD
      imports: [
        RouterTestingModule
      ],
=======
>>>>>>> Gael_Ngouana
=======
      imports: [
        RouterTestingModule
      ],
>>>>>>> d9296d760cbbd49d4e7000258e2489d7fd58631d
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
<<<<<<< HEAD
  it(`should have as title 'Project2SocialNetwork'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Project2SocialNetwork');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Project2SocialNetwork app is running!');
=======
  it(`should have as title 'spring-angular'`, () => {
=======
  it(`should have as title 'Project2SocialNetwork'`, () => {
>>>>>>> d9296d760cbbd49d4e7000258e2489d7fd58631d
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('spring-angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to spring-angular!');
>>>>>>> Gael_Ngouana
=======
    expect(compiled.querySelector('.content span').textContent).toContain('Project2SocialNetwork app is running!');
>>>>>>> d9296d760cbbd49d4e7000258e2489d7fd58631d
  });
});
