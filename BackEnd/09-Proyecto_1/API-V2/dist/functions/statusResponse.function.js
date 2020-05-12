"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function statusResponse(res, code, message = '', errors, object) {
    const response = {};
    if (errors) {
        Object.assign(response, { ok: false });
        Object.assign(response, { errors: errors });
    }
    if (message) {
        Object.assign(response, { message: message });
    }
    if (object) {
        Object.assign(response, object);
    }
    res.status(code).json(response);
}
exports.statusResponse = statusResponse;
