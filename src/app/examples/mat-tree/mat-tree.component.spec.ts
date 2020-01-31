import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTreeComponent } from './mat-tree.component';

describe('MatTreeTestComponent', () => {
  let component: MatTreeComponent;
  let fixture: ComponentFixture<MatTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
