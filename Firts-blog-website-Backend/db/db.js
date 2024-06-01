import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "blogWebSite",
  password: "Harshal@23",
  port: 5432
});

// db.connect();

export default db;