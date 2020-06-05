import React, { createContext, useContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const storeContext = createContext();
const dispatchContext = createContext();

const TODOS = [
  {
    id: uuidv4(),
    text: "Walk the dog",
    finished: false,
    favorite: false,
  },
  {
    id: uuidv4(),
    text: "Make the bed",
    finished: false,
    favorite: false,
  },
  {
    id: uuidv4(),
    text: "Feed the cats",
    finished: false,
    favorite: false,
  },
];

let initialState = {
  todos: TODOS,
};

try {
  initialState = JSON.parse(localStorage.getItem("todos") || initialState);
} catch {}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS": {
      return {
        ...state,
        todos: action.todos,
      };
    }
    default: {
      return state;
    }
  }
};

export const TodosProvider = ({ children }) => {
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(store));
  }, [store]);

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    </dispatchContext.Provider>
  );
};

export const useStore = () => {
  return useContext(storeContext);
};

export const useDispatch = () => {
  return useContext(dispatchContext);
};
