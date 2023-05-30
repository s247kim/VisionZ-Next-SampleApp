import "server-only";
import mysql from "mysql2";

export default mysql
  .createPool({
    host: "127.0.0.1",
    user: "VisionZ_Express",
    password: process.env.DB_PASSWORD,
    database: "VisionZ_Practice",
  })
  .promise();
