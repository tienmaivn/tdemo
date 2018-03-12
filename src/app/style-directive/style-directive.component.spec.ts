import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleDirectiveComponent } from './style-directive.component';

describe('StyleDirectiveComponent', () => {
  let component: StyleDirectiveComponent;
  let fixture: ComponentFixture<StyleDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
