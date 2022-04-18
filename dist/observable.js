"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
/**
 * A class which implement Observer design pattern
 */
var Observable = /** @class */ (function () {
    function Observable() {
    }
    Observable.prototype.subscribe = function (event, observer) {
        Observable.listeners.push({ event: event, observer: observer });
    };
    Observable.prototype.subscribeAll = function (observer) {
        Observable.listenersAll.push({ observer: observer });
    };
    Observable.prototype.unsubscribe = function (event, observer) {
        var listeners = Observable.listeners.filter(function (value) {
            if (value.event == event && value.observer == observer)
                return false;
            return true;
        });
        Observable.listeners = listeners;
    };
    Observable.prototype.notify = function (event, data) {
        var listeners = this.getListeners(event);
        listeners.forEach(function (listener) {
            listener.observer.onNotify(event, data);
        });
        var listenersAll = Observable.listenersAll;
        listenersAll.forEach(function (listener) {
            listener.observer.onNotify(event, data);
        });
    };
    Observable.prototype.getListeners = function (event, observer) {
        return Observable.listeners.filter(function (value) {
            if (event) {
                if (observer) {
                    if (value.event == event && value.observer == observer)
                        return true;
                }
                else {
                    if (value.event == event)
                        return true;
                }
            }
            else {
                if (observer) {
                    if (value.observer == observer)
                        return true;
                }
                else {
                    return true;
                }
            }
            return false;
        });
    };
    Observable.listeners = [];
    Observable.listenersAll = [];
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=observable.js.map