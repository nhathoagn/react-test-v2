import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  error: null,
  score: null,
  currentQuestionIndex: null,
  answers: [],
}
const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers:{
        fetchQuestionSuccess(state, action){
            state.questions = action.payload;
            state.score = 0;
            state.currentQuestionIndex = 0;
            state.answers = [];
        },
        fetchQuestionFail(state, action){
            state.error = action.payload;
        },
        answerQuestion(state, action){
            const currentQuestion = state.questions[state.currentQuestionIndex];
            state.score += action.payload.answers === currentQuestion.correct_answer ? 1 : 0;
            state.answers.push({
                question: currentQuestion.questions,
                answer: action.payload.answer,
                correctAnswer: currentQuestion.correct_answer,
                isCorrect: action.payload.answer === currentQuestion.correct_answer
            });
        },
        nextQuestion(state){
            state.currentQuestionIndex +=1;
        }
    }
})
export const {
    fetchQuestionSuccess,
    fetchQuestionFail,
    answerQuestion,
    nextQuestion,
} = quizSlice.actions;
export default quizSlice.reducer
