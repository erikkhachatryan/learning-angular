import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineWorkerComponent } from './inline-worker.component';

describe('InlineWorkerComponent', () => {
  let component: InlineWorkerComponent;
  let fixture: ComponentFixture<InlineWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
