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

var subject = new AsyncSubject();

subject.subscribe({
  next: v => console.log("observerA: " + v)
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
  next: v => console.log("observerB: " + v)
});

subject.next(5);
subject.complete();
