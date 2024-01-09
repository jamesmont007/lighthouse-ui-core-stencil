import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSelectorComponent } from './core-selector.component';

describe('CoreSelectorComponent', () => {
  let component: CoreSelectorComponent;
  let fixture: ComponentFixture<CoreSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
