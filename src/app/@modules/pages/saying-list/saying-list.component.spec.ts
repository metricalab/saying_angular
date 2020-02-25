import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayingListComponent } from './saying-list.component';

describe('SayingListComponent', () => {
  let component: SayingListComponent;
  let fixture: ComponentFixture<SayingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
