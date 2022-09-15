import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchTodos = createAsyncThunk('todos/fetchTodos',async ()=>{
  const response= await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log({response})
  return response.data
})

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    isLoading: false,
    todos: [],
    error: null,
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.pending, (state, action) => {
      // Add user to the state array
      state.isLoading = true
      state.todos = []
      state.error = null
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      // Add user to the state array
      state.isLoading = false
      state.todos = action.payload
      state.error = null
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      // Add user to the state array
      state.isLoading = false
      state.todos = []
      state.error = action.payload
    });
  },
})

export default todoSlice.reducer