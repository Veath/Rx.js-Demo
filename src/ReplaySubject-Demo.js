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
  BehaviorSubject,
  ReplaySubject
} from "rxjs";
import { multicast } from "rxjs/operators";

const subject = new ReplaySubject(1);
subject.subscribe({
  next: x => console.log("ObserverA:" + x)
});

subject.next(1);
subject.next(2);
subject.next(3);

subject.subscribe({
  next: v => console.log("ObserverB:" + v)
});
subject.next(5);
