import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDynamicTreeTestComponent } from './mat-dynamic-tree-test.component';

describe('MatDynamicTreeTestComponent', () => {
  let component: MatDynamicTreeTestComponent;
  let fixture: ComponentFixture<MatDynamicTreeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDynamicTreeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDynamicTreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
