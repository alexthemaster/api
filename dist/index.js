"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
__exportStar(require("./lib/SkyraAPI"), exports);
__exportStar(require("./lib/structures/api/ApiRequest"), exports);
__exportStar(require("./lib/structures/api/ApiResponse"), exports);
__exportStar(require("./lib/structures/api/CookieStore"), exports);
__exportStar(require("./lib/structures/http/Server"), exports);
__exportStar(require("./lib/utils/Mime"), exports);
exports.main = () => 'this builds and pushes';
//# sourceMappingURL=index.js.map