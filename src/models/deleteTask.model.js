import getPool from "../db/getpool.js";

export default async function deleteTaskModel(task_id) {
  try {
    const pool = await getPool();

    const [result] = await pool.query(`DELETE FROM tasks
WHERE task_id = ? `, [task_id]);

console.log(result.changedRows);
    return {
      message: result.affectedRows
        ? "La tarea ha sido eliminada con éxito."
        : "No existe ninguna tarea con ese id.",
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}