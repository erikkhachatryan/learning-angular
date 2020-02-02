import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit {

  private n: number = 100000000;
  private withWebWorker: boolean = true;
  private errorMessage: string;

  private sum: number;

  constructor() { }

  ngOnInit() {
  }

  public calcFactorial(): void {
    this.reset();
    setTimeout(() => {
      if (this.withWebWorker) {
        if (typeof Worker !== 'undefined') {
          // Create a new
          const worker = new Worker('./app.worker', {type: 'module'});
          worker.onmessage = (messageEvent: MessageEvent) => {
            this.sum = messageEvent.data;
          };
          worker.postMessage({cmd: "nSum", n: this.n});
        } else {
          this.errorMessage = "Web Workers are not supported in this environment.";
          // Web Workers are not supported in this environment.
          // You should add a fallback so that your program still executes correctly.
        }
      } else {
        this.calcNSum();
      }
    });
  }

  private calcNSum(): void {
    let sum = 0;
    for (let i = 1; i < +this.n + 1; i++) {
      sum += i;
    }
    this.sum = sum;
  }

  private reset() {
    this.sum = null;
    this.errorMessage = null;
  }
}
