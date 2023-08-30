import { DataSource } from "typeorm"

export const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "ramram19",
    database: "seandb",
    entities: ["src/entity/*.js"],
    logging: true,
    synchronize: true,
})
