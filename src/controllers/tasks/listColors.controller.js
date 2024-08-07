import { listColorsModel } from "../../models/tasks/index.js"; 

export default async function listColorsController(req, res, next) {
  try {
    // Obtener parámetros de búsqueda y ordenado desde los query params

    const search = req.query.search;
    const sort = req.query.sort;
    const order = req.query.order;

    // Llamar al modelo para obtener la lista de tareas de familia
    const { colors } = await listColorsModel(search, sort, order);

    // Enviar la respuesta
    return res.status(200).json({
      ok: true,

      colors,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
}