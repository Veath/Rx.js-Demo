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
  PartialObserver,
  BehaviorSubject
} from "rxjs";
import { multicast } from "rxjs/operators";

const subject = new BehaviorSubject(0);
subject.subscribe({
  next: v => console.log("observerA:" + v)
});
subject.next(1);
subject.next(2);
subject.subscribe({
  next: v => console.log("observerB:" + v)
});

subject.next(3);
