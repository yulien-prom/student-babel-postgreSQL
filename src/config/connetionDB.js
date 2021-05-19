import sequelize from "sequelize"

export const connectiondb = new sequelize(
    "collageDB",
    "yull",
    "powerd1",

    {
        host: "localhost",
        dialect:'postgres'

    }

);