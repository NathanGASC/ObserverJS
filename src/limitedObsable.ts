import { Observer } from "./observer";

export class LimitedObservable {
    protected listeners: Observer[] = [];

    private upperFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    private prefixOnIfNotPresent(str: string) {
        return str.startsWith("on") ? str : "on" + str
    }

    private parseEventName(event: string) {
        return this.prefixOnIfNotPresent(this.upperFirstLetter(event));
    }

    protected notify(event: string, data: any = {}) {
        this.listeners.forEach((listener) => {
            const func = (listener as any)[this.parseEventName(event)]
            if (func) func(data);
        })
    }
}