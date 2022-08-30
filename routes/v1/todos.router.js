const express = require("express");
const todosControlers = require("../../controllers/todos.controler");
const router = express.Router();

router
  .route("/")
  /* 
1.get all todos
*/
  .get(todosControlers.getAllTodos)
  /* 
  1.add toods 
  */
  .post(todosControlers.saveTodos);
/* 
  1.delete tood
  */
router
  .route("/:id")
  .delete(todosControlers.deleteTodos)
  /* 
  1.update tood 
  */
  .put(todosControlers.updateTodos);

module.exports = router;
