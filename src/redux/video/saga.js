import {all, takeLatest, call, put} from 'redux-saga/effects'
import {Action} from './redux'
import API from "../../api";


export default function*() {
    yield all([
        takeLatest(Action.Types.PLAY_LIST, function*({data}) {
            const result = yield call(API.playList, data)
            console.log("[Saga PLAY_LIST] playList", result);

            if (result) {
                yield put(Action.Creators.updateState({
                    list: result.data
                }))
            }
        })
    ])
}