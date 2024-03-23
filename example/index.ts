import { Observable, Observer, MutableState } from "../dist/index";

// ------------------------------------------------------------------------------------------------
// Example 1 using Observer and Observable

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

// ------------------------------------------------------------------------------------------------
// Example 2 using MutableState

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