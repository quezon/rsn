import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProfilePageComponent } from './other-profile-page.component';

describe('OtherProfilePageComponent', () => {
  let component: OtherProfilePageComponent;
  let fixture: ComponentFixture<OtherProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
