"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    JWTSECRET: process.env.JWT_SECRET || 'cultura-cupcake-secret-token',
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://josh:josh@localhost:27018/culturaCupcake',
        ATLAS_URI: 'mongodb+srv://josh:josh@tmsc-cluster-phugw.gcp.mongodb.net/culturaCupcake?retryWrites=true&w=majority'
    }
};
