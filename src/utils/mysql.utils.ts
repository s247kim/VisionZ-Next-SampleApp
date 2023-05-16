import "server-only";
import mysql from "mysql2";

export default mysql
  .createPool({
    host: "127.0.0.1",
    user: "VisionZ_Express",
    password: "password",
    database: "VisionZ_Practice",
  })
  .promise();
