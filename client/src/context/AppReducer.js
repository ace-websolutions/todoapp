export const ACTIONS = {
  GET_TODO: "get-todo",
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
export const MESSAGE = {
  GET_TODO:'',
  ADD_TODO:'Todo added!',
  EDIT_TODO:'Todo saved!',
  DELETE_TODO:'Todo deleted.',
  UPDATE_SETTINGS:'Settings saved!'
}
export const PAGES = {
  TODOS:"todos"
}
export const reducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.GET_TODO:
      return action.payload
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        { id: Date.now(), title: action.payload.title, complete: false },
      ];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload);
    default:
      return todos;
  }
};

export const INITIAL_TODOS = []