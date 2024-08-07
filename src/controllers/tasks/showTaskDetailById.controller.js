import showTaskDetailByIdModel from "../../models/tasks/showTaskDetailById.model.js";
import idSchema from "../../validations/idSchema.js";

export default async function showTaskDetailByIdController(req, res, next) {
  try {
    const id = req.params.idTask;

    // Validar el ID usando el esquema definido en idSchema.js
    const { error, value } = idSchema.validate(id);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { tasks, subTasks, notes } = await showTaskDetailByIdModel(value);
    if (tasks.length === 0) {
      return res.status(404).json({
        ok: false,
        message: "Tasks no encontrados.",
        code: "NOT_FOUND",
      });
    }

    return res.status(200).json({
      ok: true,
      tasks,
      subTasks,
      notes,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
