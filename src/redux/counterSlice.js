import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchInitialCountersAPI = async () => {
  const response = await Promise.resolve({
    data: [{ id: Date.now(), value: Math.floor(Math.random() * 100) }]
  });
  return response.data;
};

export const fetchInitialCounters = createAsyncThunk(
  'counter/fetchInitialCounters',
  async () => {
    const counters = await fetchInitialCountersAPI();
    return counters;
  }
);


const initialState = {
  counters: [],
  status: 'idle',
  error: null,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCounter: (state) => {
      const initialValue = Math.floor(Math.random() * 100);
      state.counters.push({ id: Date.now(), value: initialValue });
    },
    increment: (state, action) => {
      const counter = state.counters.find((c) => c.id === action.payload);
      if (counter) {
        counter.value += 1;
      }
    },
    decrement: (state, action) => {
      const counter = state.counters.find((c) => c.id === action.payload);
      if (counter) {
        counter.value -= 1;
      }
    },
    randomize: (state, action) => {
      const counter = state.counters.find((c) => c.id === action.payload);
      if (counter) {
        counter.value = Math.floor(Math.random() * 100);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialCounters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInitialCounters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.counters = action.payload;
      })
      .addCase(fetchInitialCounters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addCounter, increment, decrement, randomize } = counterSlice.actions;
export default counterSlice.reducer;
