import { Mixin } from "ts-mixer";
import { LimitedObservable } from "./limitedObsable";
import { LimitedObserver } from "./limitedObserver";

/**
 * MutableState class is a wrapper around a data that can be updated.
 * The callback you pass to the constructor will be called every time
 * the data is updated. To help you manage the data, you can use the
 * `copy` method which will give you the current data and return the
 * new data after the update.
 * 
 * @example
 * ```
class State {
    search: string = "";
}

let state = new MutableState(new State(), (state) => {
    console.log("An user made a search action:", state.search);
})

state.value = state.copy((state)=>{
    state.search = "How to implement Observer design pattern?";
    return state;
})
 * ```
 */
export class MutableState<T> extends Mixin(LimitedObservable, LimitedObserver) {
    private data: T;

    constructor(data: T, onUpdate: (data: T) => void){
        super();
        this.data = data;
        this.subscribe(this);
        (this as any)["onUpdate"] = onUpdate;
    }
    
    public get value() : T {
        return this.data;
    }

    public set value(v : T) {
        if(this.data === v) return;
        this.data = v;
        this.notify("Update", this.data);
    }

    public copy(update: (data: T) => T) : T {
        let oldData = this.data;
        let newData = update(oldData);
        return newData;
    }
}