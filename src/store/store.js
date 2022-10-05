import { configureStore } from '@reduxjs/toolkit'
import PlayerSlice from "./slices/playerSlice/player"
import QuestionSlice from "./slices/questions/question"
export const store = configureStore({
    reducer: {
        player: PlayerSlice,
        question: QuestionSlice
    },
});
