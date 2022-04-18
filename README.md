# Observer
Observer module is an implementation for Observer design pattern. Observer design pattern is used when you have a class which should send event and other classes should
do things on those events.

## How to use
To install it in your nodejs dependency `npm i @nathangasc/observer`

Here an example of use of Observer module.

```ts
import { Observer } from '@nathangasc/observer/observer';
import { Observable } from '@nathangasc/observer/observable';

/**
 * First we create a class which is an Observable class. Here, we have Google class which make able to do "search". Later we want to make able other 
 * class to do stuff on search.
 */
class Google extends Observable<["search", "langSet", "langGet"]> {
    private _lang: string = "en";

    search(search: string) {
        /**
         * We notify all Observer classes which listen to us that something his done. Here it's a "Search" which is done. 
         * We also give some data to the listeners (2nd param).
         */
        this.notify("search", { search });
    }

    public set lang(lang: string) {
        this._lang = lang;
        this.notify("langSet", { lang: this._lang });
    }

    public get lang(): string {
        this.notify("langGet", { lang: this._lang });
        return this._lang;
    }
}

/**
 * We now create classes which observe google
 */
class Spy extends Observer {
    /**
     * onSearch will be triggered by "Search" event. Basically an event will trigger on[EventName](). Example if event is "attack", it will trigger onAttack.
     * @param data which is send with the event
     */
    onSearch(data: { search: string }): void {
        console.log("An user made a research. Let's use it for targeted publicity. The user searched " + data.search);
    }
}

class Analytics extends Observer {
    onSearch(data: any): void {
        console.log("An user made a research. We will save is research for decision making");
    }

    onLangSet(data: any): void {
        console.log("Lang changed");
    }
}

//Example of use
const google = new Google();
const spy = new Spy();
const analytics = new Analytics();
//If we set log to true for observer, it will log each time an event is triggered without being handle by a on[EventName] method
Observer.log = true;

google.subscribe("search", spy);
google.subscribeAll(analytics);
google.search("How to do Observer design pattern?");
google.lang = "fr";
const lang = google.lang;
```