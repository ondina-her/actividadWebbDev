import { createSlice } from '@reduxjs/toolkit'

export const goalSlice = createSlice({
    name: 'goals',
    initialState: {
        value: [{
            "name": "programar en react", 
            "description":"jdhdhfjfkksdj",
            "dueDate":"2025-10-01"
        }]
    },
    reducers: {
        addGoal: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addGoal } =  goalSlice.actions
export const selectGoals = (state) => state.goals.value

export default goalSlice.reducer