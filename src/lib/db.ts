// src/lib/db.ts
import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "teoria_diseno",
  password: "49bTYWzU@",
  port: "5432",
});

export default pool;
