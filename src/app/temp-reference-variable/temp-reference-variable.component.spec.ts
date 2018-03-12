import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempReferenceVariableComponent } from './temp-reference-variable.component';

describe('TempReferenceVariableComponent', () => {
  let component: TempReferenceVariableComponent;
  let fixture: ComponentFixture<TempReferenceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempReferenceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
