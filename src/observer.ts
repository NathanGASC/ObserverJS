export class Observer {
    public static log: boolean = false;

    onNotify(event: string, data: any) {
        event = event.charAt(0).toUpperCase() + event.substring(1, event.length);

        if ((this as any)["on" + event]) {
            (this as any)["on" + event](data)
        } else {
            if (Observer.log) console.info("[OBSERVER] " + (this.constructor as any).name + ": " + event, "event with data", data, "isn't handled but is triggered. If you want to handle this event, create a method", "on" + event);
        }
    }
}