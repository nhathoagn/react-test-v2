import { createSlice } from '@reduxjs/toolkit';
import { START_GAME,
    FETCHING_GAME_DATA,
    GAME,
    END_GAME,} from "../../utils/constants";
import {fetchQuestionFail, fetchQuestionSuccess} from "./quiz.slice";

const  initialState=  {
    state: START_GAME,
    username: '',
}
const gameState = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
        startGame(state, action){
            state.username = action.payload;
            state.state = FETCHING_GAME_DATA
        },
        cancelFetchQuestions(state){
            state.stage = START_GAME
        },
        finishGame(state){
            state.stage = END_GAME
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchQuestionSuccess,(state)=>{
                state.stage = GAME
            })
            .addCase(fetchQuestionFail,(state)=>{
                state.stage = START_GAME
            })
    }
});
export const {
  startGame
} = gameState.actions
export default gameState.reducer
