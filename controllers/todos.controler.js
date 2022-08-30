let todos = [
  {
    id: 1,
    name: "joy1",
  },
  {
    id: 1,
    name: "joy1",
  },
  {
    id: 2,
    name: "joy2",
  },
  {
    id: 3,
    name: "joy3",
  },
];

module.exports.getAllTodos = (req, res, next) => {
  // const { limit, page } = req.query;
  // console.log(limit, page);
  // res.status(200).send(todos.slice(0, limit));
  res.download(-__dirname + "/text.txt");
  // console.log(req.accepts(["json", "text"]));
  // res.status(200).send(todos);
};
module.exports.saveTodos = (req, res) => {
  const { id, name } = req.body;
  console.log(id, name);
  const newTodo = { id, name };
  todos.push(newTodo);
  res.send(newTodo);
};
module.exports.updateTodos = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id, name);
  const updateTodo = todos.find((todo) => todo.id === Number(id));
  const newUpdateTodo = (updateTodo.name = name);
  // console.log(updateTodo);
  res.send(updateTodo);
};
module.exports.deleteTodos = (req, res) => {
  const { id } = req.params;
  const deleteTodo = todos.filter((todo) => todo.id !== Number(id));
  todos = deleteTodo;
  // console.log(deleteTodo);
  res.send("delete success");
};

// module.exports = { getAllTodos };
