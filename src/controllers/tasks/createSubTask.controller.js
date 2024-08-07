import { createSubTaskModel } from "../../models/tasks/index.js";
import createSubTaskSchema from "../../validations/createSubTaskSchema.js";

export default async function createSubTaskController(req, res, next) {
  try {
    const body = {
      title: req.body.title,
      task_id: req.params.idTask,
    };

    const { error, value } = createSubTaskSchema.validate(body);

    if (error) {
      return res.status(400).json({
        ok: false,
        message: error.details[0].message,
      });
    }

    const { title, task_id } = value;

    const { subTask } = await createSubTaskModel(title, task_id);

    return res.status(200).json({
      ok: true,
      message: subTask,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}
