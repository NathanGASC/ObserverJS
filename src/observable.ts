import { Observer } from "./observer";

/**
 * A class which implement Observer design pattern
 */
export class Observable<Events extends string[]> {
    private static listeners: { event: string, observer: Observer }[] = [];
    private static listenersAll: { observer: Observer }[] = [];

    subscribe(event: Events[number], observer: Observer) {
        Observable.listeners.push({ event: event, observer: observer });
    }

    subscribeAll(observer: Observer) {
        Observable.listenersAll.push({ observer: observer });
    }

    unsubscribe(event: Events[number], observer: Observer) {
        const listeners = Observable.listeners.filter((value) => {
            if (value.event == event && value.observer == observer) return false;
            return true;
        })
        Observable.listeners = listeners;
    }

    notify(event: Events[number], data: any) {
        const listeners = this.getListeners(event);
        listeners.forEach(listener => {
            listener.observer.onNotify(event, data);
        });

        const listenersAll = Observable.listenersAll;
        listenersAll.forEach((listener) => {
            listener.observer.onNotify(event, data);
        })
    }

    private getListeners(event?: Events[number], observer?: Observer): { event: Events[number], observer: Observer }[] {
        return Observable.listeners.filter((value) => {
            if (event) {
                if (observer) {
                    if (value.event == event && value.observer == observer) return true;
                } else {
                    if (value.event == event) return true;
                }
            } else {
                if (observer) {
                    if (value.observer == observer) return true;
                } else {
                    return true;
                }
            }
            return false;
        })
    }
}