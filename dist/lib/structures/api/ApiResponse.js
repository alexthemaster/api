"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
const http_1 = require("http");
require("../../utils/Mime");
class ApiResponse extends http_1.ServerResponse {
    ok(data = http_1.STATUS_CODES[200]) {
        this.status(200);
        return typeof data === 'string' ? this.text(data) : this.json(data);
    }
    noContent() {
        return this.status(204).end();
    }
    badRequest(data = http_1.STATUS_CODES[400]) {
        return this.status(400).json({ reason: data });
    }
    unauthorized(data = http_1.STATUS_CODES[401]) {
        return this.status(401).json({ reason: data });
    }
    forbidden(data = http_1.STATUS_CODES[403]) {
        return this.status(403).json({ reason: data });
    }
    notFound(data = http_1.STATUS_CODES[404]) {
        return this.status(404).json({ reason: data });
    }
    error(error) {
        if (typeof error === 'string') {
            return this.status(500).json({ error });
        }
        return this.status(error).json({ error: http_1.STATUS_CODES[error] });
    }
    status(code) {
        this.statusCode = code;
        return this;
    }
    json(data) {
        this.setContentType("application/json" /* ApplicationJson */).end(JSON.stringify(data));
    }
    text(data) {
        this.setContentType("text/plain" /* TextPlain */).end(data);
    }
    setContentType(contentType) {
        this.setHeader('Content-Type', contentType);
        return this;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map