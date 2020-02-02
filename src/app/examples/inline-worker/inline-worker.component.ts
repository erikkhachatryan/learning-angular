import { Component, OnInit } from '@angular/core';
import {InlineWorker} from "./inline-worker.model";

@Component({
  selector: 'app-inline-worker',
  templateUrl: './inline-worker.component.html',
  styleUrls: ['./inline-worker.component.css']
})
export class InlineWorkerComponent implements OnInit {

  constructor() { }

  private result;

  ngOnInit() {

    const worker = new InlineWorker(() => {
      // START OF WORKER THREAD CODE
      console.log('Start worker thread, wait for postMessage: ');

      const calculateCountOfPrimeNumbers = (limit) => {

        const isPrime = num => {
          for (let i = 2; i < num; i++) {
            if (num % i === 0) { return false; }
          }
          return num > 1;
        };

        let countPrimeNumbers = 0;

        while (limit >= 0) {
          if (isPrime(limit)) { countPrimeNumbers += 1; }
          limit--;
        }

        // this is from DedicatedWorkerGlobalScope ( because of that we have postMessage and onmessage methods )
        // and it can't see methods of this class
        // @ts-ignore
        this.postMessage({
          primeNumbers: countPrimeNumbers
        });
      };

      // @ts-ignore
      this.onmessage = (messageEvent: MessageEvent) => {
        console.log('Calculation started: ' + new Date());
        calculateCountOfPrimeNumbers(messageEvent.data.limit);
      };
      // END OF WORKER THREAD CODE
    });

    worker.postMessage({ limit: 300000 });

    worker.onmessage().subscribe((messageEvent: MessageEvent) => {
      console.log('Calculation done: ', new Date() + ' ' + messageEvent.data);
      this.result = messageEvent.data.primeNumbers;
      worker.terminate();
    });

    worker.onerror().subscribe((errorEvent: ErrorEvent) => {
      console.log(errorEvent);
    });
  }

}
