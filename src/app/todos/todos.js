const initialTodo = {
  text: 'Use AngularJS',
  completed: false,
  id: 0
};

class TodoService {
  addTodo(text, todos) {
    todos.$add({
      completed: false,
      text
    });
    return todos;
  }

  completeTodo(id, todos) {
    let encontrado = todos.find(todo => {
      return todo.$id === id;
    });
    encontrado.completed = !encontrado.completed;
    todos.$save(encontrado);
    return todos;
  }

  deleteTodo(id, todos) {
    todos.$remove(todos.find(todo => {
      return todo.$id === id;
    }));
    return todos;
  }

  editTodo(id, text, todos) {
    let encontrado = todos.find(todo => {
      return todo.$id === id;
    });
    encontrado.text = text;
    todos.$save(encontrado);
    return todos;
  }

  completeAll(todos) {
    const areAllMarked = todos.every(todo => todo.completed);
    todos.forEach(todo => {
      todo.completed = !areAllMarked;
      todos.$save(todo);
    });
    return todos;
  }

  clearCompleted(todos) {
    let completados = todos.filter(todo => {
      return todo.completed === true;
    });
    completados.forEach(todo => {
      todos.$remove(todo);
    });
    return todos;
  }
}
