import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayingDetailComponent } from './saying-detail.component';

describe('SayingDetailComponent', () => {
  let component: SayingDetailComponent;
  let fixture: ComponentFixture<SayingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
