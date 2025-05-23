/* A simple redux store/actions/reducer implementation.
 * A true app would be more complex and separated into different files.
 */
import { configureStore, createSlice } from '@reduxjs/toolkit'

/*
 * The initial state of our store when the app loads.
 * Usually, you would fetch this from a server. Let's not worry about that now
 */
const defaultTasks = [
  { id: '1', title: 'Build Your Own Redis with C/C++', state: 'TASK_INBOX' },
  { id: '2', title: 'Build Your Own Database From Scratch', state: 'TASK_INBOX' },
  { id: '3', title: 'From Source Code To Machine Code', state: 'TASK_INBOX' },
  { id: '4', title: 'Build Your Own Web Server From Scratch In Node.JS', state: 'TASK_INBOX' },
  { id: '5', title: 'How to read an understand SICP', state: 'TASK_INBOX' },
  { id: '6', title: 'How to read an understand CSAPP', state: 'TASK_INBOX' },
]
const TaskBoxData = {
  tasks: defaultTasks,
  status: 'idle',
  error: null,
}

const UserData = {
  user: null
}

/*
 * The store is created here.
 * You can read more about Redux Toolkit's slices in the docs:
 * https://redux-toolkit.js.org/api/createSlice
 */
const TasksSlice = createSlice({
  name: 'taskbox',
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload
      const task = state.tasks.findIndex((task) => task.id === id)
      if (task >= 0) {
        state.tasks[task].state = newTaskState
      }
    },
  },
})

const UserSlice = createSlice({
  name: 'user',
  initialState: UserData,
  reducers: {
    updateUser: (state, action) => {
      state.user = {...action.payload};
    },
  },
})

// The actions contained in the slice are exported for usage in our components
export const { updateTaskState } = TasksSlice.actions
export const { updateUser } = UserSlice.actions;

/*
 * Our app's store configuration goes here.
 * Read more about Redux's configureStore in the docs:
 * https://redux-toolkit.js.org/api/configureStore
 */
console.log('execute configureStore');
const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
    user: UserSlice.reducer,
  },
})

export default store
