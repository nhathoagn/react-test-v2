import { take, race, delay, put } from 'redux-saga/effects';
import {answerQuestion, fetchQuestionSuccess, nextQuestion} from "../slices/quiz.slice";
function* answersSaga() {
    for (let i =0; i < 3 ; i++){
        yield take(answerQuestion.type)
        yield put(nextQuestion())
    }
}
export default function* gameSaga(){
    while (true){
        yield take(fetchQuestionSuccess.type)
        yield race({
            delay: delay(10),
            done: answersSaga()
        })
        yield put(finishGame())
    }
}
