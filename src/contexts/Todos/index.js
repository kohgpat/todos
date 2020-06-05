import React, { createContext, useContext, useReducer } from "react";

const storeContext = createContext();
const dispatchContext = createContext();

const TODOS = [
  {
    id: 1,
    text: "Walk the dog",
    finished: false,
    favorite: false,
  },
  {
    id: 2,
    text: "Make the bed",
    finished: false,
    favorite: false,
  },
  {
    id: 3,
    text: "Feed the cats",
    finished: false,
    favorite: false,
  },
];

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

export const TodosProvider = ({
  children,
  initialState = {
    todos: TODOS,
  },
}) => {
  const [store, dispatch] = useReducer(reducer, initialState);

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
