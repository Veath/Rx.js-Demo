import {
  Observable,
  Subject,
  asapScheduler,
  pipe,
  of,
  from,
  interval,
  merge,
  fromEvent,
  SubscriptionLike,
  PartialObserver
} from "rxjs";
import { multicast } from "rxjs/operators";

var source = from([1, 2, 3]);
var subject = new Subject();
var multicasted = source.pipe(multicast(subject));
multicasted.subscribe({
  next: v => console.log("observerA: " + v)
});
multicasted.subscribe({
  next: v => console.log("observerB: " + v)
});
multicasted.connect();
