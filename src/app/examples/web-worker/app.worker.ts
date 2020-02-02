/// <reference lib="webworker" />

onmessage = (messageEvent: MessageEvent) => {
  let result: number;
  const command: string = messageEvent.data.cmd;
  switch (command) {
    case "nSum": {
      result = calcNSum(+messageEvent.data.n);
      break;
    }
  }
  postMessage(result);
};

function calcNSum(n: number) {
  let sum = 0;
  for (let i = 1; i < n + 1; i++) {
    sum += i;
  }
  return sum;
}
