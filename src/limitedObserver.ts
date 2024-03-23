import { LimitedObservable } from "./limitedObsable";

export class LimitedObserver { 
    protected subscribe(observable: LimitedObservable) {
        (observable as any).listeners.push(this);
    }

    protected unsubscribe(observable: LimitedObservable) {
        const listeners = (observable as any).listeners.filter((value:any) => {
            if (value == this) return false;
            return true;
        });
        (observable as any).listeners = listeners;
    }
}