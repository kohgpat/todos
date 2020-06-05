import { useStore, useDispatch } from "../../../../contexts/Todos";

let nextId = 4;

export const useTodos = () => {
  const { todos } = useStore();
  const dispatch = useDispatch();

  const setTodos = (todos) => {
    dispatch({ type: "SET_TODOS", todos });
  };

  const onCheck = (todo) => {
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
      id: nextId++,
      ...todoInput,
    };
    setTodos([todo, ...todos]);
  };

  return {
    todos,
    onCheck,
    removeTodo,
    addTodo,
  };
};
