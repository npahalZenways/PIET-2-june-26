"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function skill(param) {
    return function (target) {
        target.prototype.skill = param;
    };
}
exports.skill = skill;
//# sourceMappingURL=decorator.js.map