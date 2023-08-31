"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.myDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "ramram19",
    database: "seandb",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
});
