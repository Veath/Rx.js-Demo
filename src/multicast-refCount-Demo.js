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
  interval
} from "rxjs";
import { multicast } from "rxjs/operators";

var source = interval(500);
var subject = new Subject();
var refCounted = source.pipe(multicast(subject)).refCount();
var subscription1, subscription2, subscriptionConnect;

// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log("observerA subscribed");
subscription1 = refCounted.subscribe({
  next: v => console.log("observerA: " + v)
});

setTimeout(() => {
  console.log("observerB subscribed");
  subscription2 = refCounted.subscribe({
    next: v => console.log("observerB: " + v)
  });
}, 600);

setTimeout(() => {
  console.log("observerA unsubscribed");
  subscription1.unsubscribe();
}, 1200);

// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
  console.log("observerB unsubscribed");
  subscription2.unsubscribe();
}, 2000);
