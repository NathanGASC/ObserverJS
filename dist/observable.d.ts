import { Observer } from "./observer";
export declare class Observable {
    listeners: Observer[];
    notify(event: string, data?: any): void;
}
//# sourceMappingURL=observable.d.ts.map