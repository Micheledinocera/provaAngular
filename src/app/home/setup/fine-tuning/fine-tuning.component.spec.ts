import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FineTuningComponent } from './fine-tuning.component';

describe('FineTuningComponent', () => {
  let component: FineTuningComponent;
  let fixture: ComponentFixture<FineTuningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FineTuningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FineTuningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
