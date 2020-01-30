import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeTestComponent } from './mat-tree-test.component';

describe('MatTreeTestComponent', () => {
  let component: MatTreeTestComponent;
  let fixture: ComponentFixture<MatTreeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTreeTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTreeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
