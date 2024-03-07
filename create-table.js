import { sql } from './db.js'

sql`
CREATE TABLE video (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  duration INTERVAL
);
`.then(() => {
  console.log("Tabela criada!")
})
