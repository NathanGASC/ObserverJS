import { Observer } from "./observer";
import { LimitedObservable } from "./limitedObsable";

/**
 * Observable class is a class that can be observed by multiple observers.
 * An observable notify an event to all its observers when the notify method
 * is called.
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
class Google extends Observable {
    search(searched: string) {
        this.notify(googleEvents.search, { searched })
    }
}
 * ```
 */
export class Observable extends LimitedObservable {
    public listeners: Observer[] = [];

    notify(event: string, data: any = {}) {
        super.notify(event, data);
    }
}