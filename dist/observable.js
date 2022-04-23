"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Observable = void 0;
var Observable = /** @class */ (function () {
    function Observable() {
        this.listeners = [];
    }
    Observable.prototype.notify = function (event, data) {
        if (data === void 0) { data = {}; }
        this.listeners.forEach(function (listener) {
            var func = listener["on" + event];
            if (func)
                func(data);
        });
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=observable.js.map