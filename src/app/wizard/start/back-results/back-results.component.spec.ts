import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackResultsComponent } from './back-results.component';

describe('BackResultsComponent', () => {
  let component: BackResultsComponent;
  let fixture: ComponentFixture<BackResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
