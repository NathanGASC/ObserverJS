"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.onNotify = function (event, data) {
        event = event.charAt(0).toUpperCase() + event.substring(1, event.length);
        if (this["on" + event]) {
            this["on" + event](data);
        }
        else {
            if (Observer.log)
                console.info("[OBSERVER] " + this.constructor.name + ": " + event, "event with data", data, "isn't handled but is triggered. If you want to handle this event, create a method", "on" + event);
        }
    };
    Observer.log = false;
    return Observer;
}());
exports.Observer = Observer;
//# sourceMappingURL=observer.js.map