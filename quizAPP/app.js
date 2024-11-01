import sqlite3 from 'sqlite3';
import {open} from 'sqlite';


async function criarEPopularTabelaUsuarios(email, senha) {
  const db = await open({
    filename: './banco.db',
    driver: sqlite3.Database,
  });

  db.run(`CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY, email VARCHAR(100), senha VARCHAR(100))`

  );
  db.run(`INSERT INTO usuarios (email, senha) VALUES (?,?)`, [
    email, 
    senha
]);
}

criarEPopularTabelaUsuarios();