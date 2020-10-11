import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxElementComponent } from './box-element.component';

describe('BoxElementComponent', () => {
  let component: BoxElementComponent;
  let fixture: ComponentFixture<BoxElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
