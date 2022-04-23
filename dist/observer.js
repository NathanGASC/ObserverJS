"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observer = void 0;
var Observer = /** @class */ (function () {
    function Observer() {
    }
    Observer.prototype.subscribe = function (observable) {
        observable.listeners.push(this);
    };
    Observer.prototype.unsubscribe = function (observable) {
        var _this = this;
        var listeners = observable.listeners.filter(function (value) {
            if (value == _this)
                return false;
            return true;
        });
        observable.listeners = listeners;
    };
    Observer.log = false;
    return Observer;
}());
exports.Observer = Observer;
//# sourceMappingURL=observer.js.map