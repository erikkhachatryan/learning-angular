import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-do-check-parent',
  templateUrl: './do-check-parent.component.html',
  styleUrls: ['./do-check-parent.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoCheckParentComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  private data: {status?: boolean} = {};

  constructor() { }

  public changeData(): void {
    this.data = {status: this.data.status};
  }

  public changeProperty(): void {
    this.data.status = !this.data.status;
  }

  ngDoCheck(): void {
    this.logAllData("ngDoCheck");
  }

  ngAfterContentChecked(): void {
    this.logAllData("ngAfterContentChecked");
  }

  ngAfterContentInit(): void {
    this.logAllData("ngAfterContentInit");
  }

  ngAfterViewChecked(): void {
    this.logAllData("ngAfterViewChecked");
  }

  ngAfterViewInit(): void {
    this.logAllData("ngAfterViewInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logAllData("ngOnChanges");
  }

  ngOnInit(): void {
    this.logAllData("ngOnInit");
  }

  private logAllData(calledFromMethod: string): void {
    console.log(`parent: ${calledFromMethod} worked, data = {${this.data.status}}`);
  }

}
