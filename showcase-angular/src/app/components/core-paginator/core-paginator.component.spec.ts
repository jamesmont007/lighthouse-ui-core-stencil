import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePaginatorComponent } from './core-paginator.component';

describe('CorePaginatorComponent', () => {
  let component: CorePaginatorComponent;
  let fixture: ComponentFixture<CorePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
