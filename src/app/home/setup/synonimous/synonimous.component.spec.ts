import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonimousComponent } from './synonimous.component';

describe('SynonimousComponent', () => {
  let component: SynonimousComponent;
  let fixture: ComponentFixture<SynonimousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynonimousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonimousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
