import { LimitedObserver } from './limitedObserver';
import { Observable } from './observable';

/**
 * Observer class is a class that can subscribe to an Observable.
 * When this Observable will notify an event (ex: "Search"), the
 * observer will be notified at the function which contain the
 * event name (ex: onSearch).
 * 
 * Event name should be prefixed with "on" and the first letter of
 * the event name should be in uppercase. If it's not the case, it
 * will be enforced by the Observer class. So for example, function
 * `onSearch` will be called by events named `search`, `Search`,
 * `onSearch`. This is done to give more flexibility in the naming
 * of the events while keeping the naming of the functions consistent.
 * 
 * @example 
 * ```
class Analytics extends Observer {
   onSearch(data: any) {
      console.log("An user made a search action:", data.searched);
   }
}
 * ```
 */
export class Observer extends LimitedObserver {
    public static readonly log: boolean = false;

    public subscribe(observable: Observable) {
        super.subscribe(observable)
    }

    public unsubscribe(observable: Observable) {
        super.unsubscribe(observable)
    }
}