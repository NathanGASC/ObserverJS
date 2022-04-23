import { Observable } from './observable';
export class Observer {
    public static log: boolean = false;
    subscribe(observable: Observable) {
        observable.listeners.push(this);
    }

    unsubscribe(observable: Observable) {
        const listeners = observable.listeners.filter((value) => {
            if (value == this) return false;
            return true;
        })
        observable.listeners = listeners;
    }
}