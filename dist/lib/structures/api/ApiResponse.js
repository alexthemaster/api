"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
const http_1 = require("http");
require("../../utils/Mime");
/**
 * @since 1.0.0
 */
class ApiResponse extends http_1.ServerResponse {
    /**
     * @since 1.0.0
     */
    ok(data = http_1.STATUS_CODES[200]) {
        this.status(200);
        return this.respond(data);
    }
    /**
     * @since 1.0.0
     */
    created(data = http_1.STATUS_CODES[201]) {
        this.status(201);
        return this.respond(data);
    }
    /**
     * @since 1.0.0
     */
    noContent(data = http_1.STATUS_CODES[204]) {
        this.status(204);
        return this.respond(data);
    }
    /**
     * @since 1.0.0
     */
    badRequest(data) {
        return this.error(400, data);
    }
    /**
     * @since 1.0.0
     */
    unauthorized(data) {
        return this.error(401, data);
    }
    /**
     * @since 1.0.0
     */
    forbidden(data) {
        return this.error(403, data);
    }
    /**
     * @since 1.0.0
     */
    notFound(data) {
        return this.error(404, data);
    }
    /**
     * @since 1.0.0
     */
    conflict(data) {
        return this.error(409, data);
    }
    /**
     * @since 1.0.0
     */
    error(error, data) {
        if (typeof error === 'string') {
            return this.status(500).json({ error });
        }
        return this.status(error).json({ error: data !== null && data !== void 0 ? data : http_1.STATUS_CODES[error] });
    }
    /**
     * @since 1.0.0
     */
    respond(data) {
        return typeof data === 'string' ? this.text(data) : this.json(data);
    }
    /**
     * @since 1.0.0
     */
    status(code) {
        this.statusCode = code;
        return this;
    }
    /**
     * @since 1.0.0
     */
    json(data) {
        return this.setContentType("application/json" /* ApplicationJson */).end(JSON.stringify(data));
    }
    /**
     * @since 1.0.0
     */
    text(data) {
        return this.setContentType("text/plain" /* TextPlain */).end(data);
    }
    /**
     * @since 1.0.0
     */
    setContentType(contentType) {
        this.setHeader('Content-Type', contentType);
        return this;
    }
}
exports.ApiResponse = ApiResponse;
//# sourceMappingURL=ApiResponse.js.map