import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-do-check-child',
  templateUrl: './do-check-child.component.html',
  styleUrls: ['./do-check-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoCheckChildComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input()
  private data: {status?: boolean};

  private value: string;

  constructor() { }

  private refresh(): void {
  }

  private changeValue(): void {
    this.value = "Value change that Angular will detect and rerender the view";
  }

  private changeValueAsync(): void {
    setTimeout(() => {
      this.value = "This value change Angular will not detect, because it is not done from event handler or Input change";
    },);
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
    console.log(`child: ${calledFromMethod} worked, data = {${this.data.status}}, value = ${this.value}`);
  }

}
