import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSettingsComponent } from './current-settings.component';

describe('CurrentSettingsComponent', () => {
  let component: CurrentSettingsComponent;
  let fixture: ComponentFixture<CurrentSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
