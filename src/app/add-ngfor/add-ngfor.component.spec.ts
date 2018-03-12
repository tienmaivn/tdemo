import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNgforComponent } from './add-ngfor.component';

describe('AddNgforComponent', () => {
  let component: AddNgforComponent;
  let fixture: ComponentFixture<AddNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
