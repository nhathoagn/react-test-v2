import {fetchQuiz} from "../../API/Axios";
import { take, fork, call, put, cancel } from 'redux-saga/effects';
import {fetchQuestionFail, fetchQuestionSuccess} from "../slices/quiz.slice";
import * as cancelFetchQuestions from "@testing-library/user-event/dist/type";
import {startGame} from "../slices/game.slices";

function* fetchQuestionSaga(){
    try {
        const data = yield call(fetchQuiz)
        yield put(fetchQuestionSuccess(data))
    }catch (e) {
        console.log('error',e)
        yield put(fetchQuestionFail(
            'There was an error trying to get the questions. Please refresh the page!'
        ))
    }
}
function* canceFetchQuiz(fetchQuiz) {
    while (true){
        yield take(cancelFetchQuestions.type);
        yield cancel(fetchQuiz)
    }
}
export default function* startGameSage(){
    while (true){
        yield take(startGame.type)
        const fetch = yield fork(fetchQuestionSaga);
        yield fork(canceFetchQuiz, fetch)
    }
}
