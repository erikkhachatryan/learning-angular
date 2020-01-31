import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDynamicTreeComponent } from './mat-dynamic-tree.component';

describe('MatDynamicTreeTestComponent', () => {
  let component: MatDynamicTreeComponent;
  let fixture: ComponentFixture<MatDynamicTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDynamicTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDynamicTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
