# Observer
Observer module is an implementation for Observer design pattern. Observer design pattern is used when you have a class which should send event and other classes should do things on those events. 

I've also added a MutableState class which is a easier way to manage states in your application that defining Observer and Observable classes. I keep Observer and Observable classes because they don't exactly work/do the same thing as MutableState class.

## How to use
To install it in your nodejs dependency `npm i @nathangasc/observer`

### Observer & Observable
Here an example of use of Observer & Observable classes. I **strongly** recommend you to use MutableState class instead of Observer and Observable classes if it fits your needs.
```ts
import { Observable, Observer } from "@nathangasc/observer";

const googleEvents = {
    search: "Search",
}

class Google extends Observable {
    search(searched: string) {
        this.notify(googleEvents.search, { searched })
    }
}

class Analytics extends Observer {
    onSearch(data: any) {
        console.log("An user made a search action:", data.searched);
    }
}

const google = new Google();
const analytics = new Analytics();
analytics.subscribe(google);
google.search("How to implement Observer design pattern?");
```

### MutableState
Here an example of use of MutableState class.
```ts
import { MutableState } from "@nathangasc/observer";

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
```