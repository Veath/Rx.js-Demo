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
var multicasted = source.pipe(multicast(subject));
var subscription1, subscription2, subscriptionConnect;

subscription1 = multicasted.subscribe({
  next: v => console.log("observerA: " + v)
});

subscriptionConnect = multicasted.connect();

setTimeout(() => {
  subscription2 = multicasted.subscribe({
    next: v => console.log("observerB: " + v)
  });
}, 600);

setTimeout(() => {
  subscription1.unsubscribe();
}, 1200);

setTimeout(() => {
  subscription2.unsubscribe();
  subscriptionConnect.unsubscribe();
}, 2000);
