# Observer
Observer module is an implementation for Observer design pattern. Observer design pattern is used when you have a class which should send event and other classes should
do things on those events.

## How to use
To install it in your nodejs dependency `npm i @nathangasc/observer`

Here an example of use of Observer module for typescript.
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

Here an example of use of Observer module for javascript.
```js
const { Observable, Observer } = require("@nathangasc/observer");

const googleEvents = {
    search: "Search",
}

class Google extends Observable {
    search(searched) {
        this.notify(googleEvents.search, { searched })
    }
}

class Analytics extends Observer {
    onSearch(data) {
        console.log("An user made a search action:", data.searched);
    }
}

const google = new Google();
const analytics = new Analytics();
analytics.subscribe(google);
google.search("How to implement Observer design pattern?");
```