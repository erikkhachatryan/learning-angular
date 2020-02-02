import {Observable, Subject} from 'rxjs';

export class InlineWorker {

  private readonly worker: Worker;
  private onMessage = new Subject<MessageEvent>();
  private onError = new Subject<ErrorEvent>();

  public constructor(func) {

    const WORKER_ENABLED = !!(Worker);

    if (WORKER_ENABLED) {
      const functionBody: string = func
        .toString()
        .replace(/^[^{]*{\s*/, '')
        .replace(/\s*}[^}]*$/, '');

      this.worker = new Worker(URL.createObjectURL(
        new Blob([functionBody], {type: 'text/javascript'})
      ));

      this.worker.onmessage = (messageEvent: MessageEvent) => {
        this.onMessage.next(messageEvent);
      };

      this.worker.onerror = (errorEvent: ErrorEvent) => {
        this.onError.next(errorEvent);
      };
    } else {
      throw new Error('WebWorker is not enabled');
    }
  }

  public postMessage(data) {
    this.worker.postMessage(data);
  }

  public onmessage(): Observable<MessageEvent> {
    return this.onMessage.asObservable();
  }

  public onerror(): Observable<ErrorEvent> {
    return this.onError.asObservable();
  }

  public terminate() {
    if (this.worker) {
      this.worker.terminate();
    }
  }
}