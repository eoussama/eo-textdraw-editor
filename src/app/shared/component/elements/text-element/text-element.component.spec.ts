import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextElementComponent } from './text-element.component';

describe('TextElementComponent', () => {
  let component: TextElementComponent;
  let fixture: ComponentFixture<TextElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
