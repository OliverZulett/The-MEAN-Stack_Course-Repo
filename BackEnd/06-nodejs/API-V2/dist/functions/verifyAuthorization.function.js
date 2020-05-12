"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Auth(user, res, id) {
    const userAuth = user;
    if (userAuth._id === id || userAuth.role === 'ADMIN_ROLE') {
        return true;
    }
    return false;
}
exports.default = Auth;
