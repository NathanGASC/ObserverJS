import { Observer } from "./observer";
/**
 * A class which implement Observer design pattern
 */
export declare class Observable<Events extends string[]> {
    private static listeners;
    private static listenersAll;
    subscribe(event: Events[number], observer: Observer): void;
    subscribeAll(observer: Observer): void;
    unsubscribe(event: Events[number], observer: Observer): void;
    notify(event: Events[number], data: any): void;
    private getListeners;
}
//# sourceMappingURL=observable.d.ts.map