import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EngageSearchModalComponent } from './engage-search-modal.component';

describe('EngageSearchModalComponent', () => {
  let component: EngageSearchModalComponent;
  let fixture: ComponentFixture<EngageSearchModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngageSearchModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageSearchModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
