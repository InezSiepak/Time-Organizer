import express from "express";

import {
  createTaskController,
  listTaskController,
  listTaskByIdcontroller,
  createNoteController,
  createSubTaskController,
  finishTaskController,
  updateNoteController,
  finishSubTaskController,
  deleteNotecontroller,
} from "../controllers/index.js";
import checkUser from "../validations/checkUser.js";

const router = express.Router();

//tasks

router
  .get("/", listTaskController)
  .get("/:idTask", listTaskByIdcontroller)
  .post("/", checkUser, createTaskController)
  .post("/:idTask/notes", createNoteController)
  .delete("/:idTask/notes/:idNote", deleteNotecontroller)
  .patch("/:idTask/notes/:idNote", updateNoteController)
  .post("/:idTask/subtask", createSubTaskController)
  .post("/:idTask", finishTaskController)
  .post("/:idTask/subtask/:idSubTask", finishSubTaskController);

export default router;
