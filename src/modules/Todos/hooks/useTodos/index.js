import { v4 as uuidv4 } from "uuid";
import { useStore, useDispatch } from "../../../../contexts/Todos";

export const useTodos = () => {
  const { todos } = useStore();
  const dispatch = useDispatch();

  const setTodos = (todos) => {
    dispatch({ type: "SET_TODOS", todos });
  };

  const toggleCheck = (todo) => {
    const todoIdx = todos.findIndex((t) => t.id === todo.id);

    setTodos([
      ...todos.slice(0, todoIdx),
      {
        ...todo,
        finished: !todo.finished,
      },
      ...todos.slice(todoIdx + 1),
    ]);
  };

  const removeTodo = (todo) => {
    const todoIdx = todos.findIndex((t) => t.id === todo.id);
    setTodos([...todos.slice(0, todoIdx), ...todos.slice(todoIdx + 1)]);
  };

  const addTodo = (todoInput) => {
    const todo = {
      id: uuidv4(),
      created: new Date(),
      ...todoInput,
    };
    setTodos([...todos, todo]);
  };

  const updateTodo = (todo) => {
    const todoIdx = todos.findIndex((t) => t.id === todo.id);
    setTodos([...todos.slice(0, todoIdx), todo, ...todos.slice(todoIdx + 1)]);
  };

  const toggleEditMode = (todo) => {
    updateTodo({
      ...todo,
      editMode: !todo.editMode,
    });
  };

  const toggleFavorite = (todo) => {
    updateTodo({
      ...todo,
      favorite: !todo.favorite,
    });
  };

  const sortTodos = (a, b) => {
    if (a.favorite && !b.favorite) {
      return - 1;
    } else if (b.favorite && !a.favorite) {
      return 1;
    }

    return a.created - b.created;
  };

  return {
    todos: todos.sort(sortTodos),
    toggleCheck,
    removeTodo,
    addTodo,
    updateTodo,
    toggleEditMode,
    toggleFavorite,
  };
};
