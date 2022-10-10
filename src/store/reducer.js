import { combineReducers } from 'redux';
import gameSlices from "./slices/game.slices";
import quizSlice from "./slices/quiz.slice";
export default combineReducers({gameSlices,quizSlice})
