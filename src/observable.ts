import { Observer } from "./observer";

export class Observable {
    public listeners: Observer[] = [];

    notify(event: string, data: any = {}) {
        this.listeners.forEach((listener) => {
            const func = (listener as any)["on" + event];
            if (func) func(data);
        })
    }
}