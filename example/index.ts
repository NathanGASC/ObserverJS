import { Observable, Observer } from "../dist/index";

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