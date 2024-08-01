import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
  
export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const todo = {
        id: nanoid(),
        completed: false,
        task: action.payload,
      };
      state.todos.push(todo);
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, task } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.task = task;
      }
      state.todos.push(todo.task)
    },
    statusTask: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTask, deleteTask, updateTask, statusTask } = TodoSlice.actions;
export default TodoSlice.reducer;
