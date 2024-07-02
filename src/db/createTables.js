import getPool from "./getpool.js";

const createTables = async () => {
  try {
    const pool = await getPool();
    await pool.query(`DROP TABLE IF EXISTS notes,family,tasks,users`);
    await pool.query(`CREATE TABLE users (
        user_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
        username VARCHAR(100) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role ENUM('admin', 'normal') DEFAULT 'normal',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
        deletedAt DATETIME NULL
        )`);

    console.log("Tabla de users creada con éxito");

    await pool.query(
      `INSERT INTO users(username, email, password, role) VALUES ("admin","admin@gmail.com","123456",'admin')`
    );

    console.log("usuario admin creado con exito");

    await pool.query(`CREATE TABLE tasks (
	task_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
	title VARCHAR(150)  NOT NULL,
	description TEXT NOT NULL,
    start_on DATE NOT NULL,
    finish_on DATE NOT NULL,
    user_id INT UNSIGNED NOT NULL,
    done BOOLEAN NOT NULL DEFAULT FALSE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
    )`);

    console.log("tabla tasks creada con exito");

    await pool.query(`CREATE TABLE family (
    family_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    name ENUM('trabajo','deporte','estudios','casa','ocio')  NOT NULL,
    color  ENUM('negro','blanco','verde','azul','rojo','amarillo','gris') DEFAULT 'blanco' NOT NULL,
	task_id INT UNSIGNED NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks (task_id)
    )`);

    console.log("tabla family creada con exito");

    await pool.query(` CREATE TABLE notes (
    note_id INT UNSIGNED PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    task_id INT UNSIGNED NOT NULL,
    description TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (task_id) REFERENCES tasks (task_id)
    )`);
    console.log("tabla notes creada con exito");
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

createTables();
