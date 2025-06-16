import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk para agregar goal en backend
export const addGoalAsync = createAsyncThunk(
  'goals/addGoalAsync',
  async (goalData, thunkAPI) => {
    const response = await fetch('http://localhost:3000/goals/addGoals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: '123456'
      },
      body: JSON.stringify(goalData),
    });

    if (!response.ok) {
      throw new Error('Error al agregar goal en backend');
    }

    const goalFromServer = await response.json();
    return goalFromServer; // Goal con _id generado por la DB
  }
);

// Slice de goals
const goalSlice = createSlice({
  name: 'goals',
  initialState: {
    goals: [],
    loading: false,
    error: null,
  },
  reducers: {
    initAddGoal: (state, action) => {
      state.goals = [...action.payload];
    },
    removeGoal: (state, action) => {
      const id = action.payload;
      state.goals = state.goals.filter(goal => goal._id !== id);

      // ✅ Agregamos la eliminación en backend
      fetch('http://localhost:3000/goals/removeGoal/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '123456'
        }
      }).then(res => {
        if (!res.ok) throw new Error("Respuesta no OK del servidor");
      }).catch(error => {
        console.error("Error al eliminar el goal:", error);
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addGoalAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addGoalAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.goals.push(action.payload);
      })
      .addCase(addGoalAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { initAddGoal, removeGoal } = goalSlice.actions;

export const selectGoals = (state) => state.goals.goals;

export default goalSlice.reducer;
