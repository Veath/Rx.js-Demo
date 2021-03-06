import {
  Observable,
  Subject,
  asapScheduler,
  of,
  from,
  merge,
  fromEvent,
  SubscriptionLike,
  PartialObserver,
  interval,
  AsyncSubject
} from "rxjs";
import { multicast } from "rxjs/operators";

function multiplyByTen(input) {
  var output = Observable.create(function subscribe(observer) {
    input.subscribe({
      next: v => observer.next(10 * v),
      error: err => observer.error(err),
      complete: () => observer.complete()
    });
  });
  return output;
}

var input = from([1, 2, 3, 4]);
var output = multiplyByTen(input);
output.subscribe(x => console.log(x));
