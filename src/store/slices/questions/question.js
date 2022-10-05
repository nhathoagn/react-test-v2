import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const QuestionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        saveAnwser: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(id, questions) {
                return {
                    payload: {
                        id: id,
                        questions
                    }
                }
            }
        }
    }
})

export const { saveAnwser } = QuestionSlice.actions;
export const selectAllQuestion = (state) => state.questions;
export default QuestionSlice.reducer;
