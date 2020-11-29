import {all, takeLatest, call, put} from 'redux-saga/effects'
import {Action} from './redux'
import API from "../../api";


export default function*() {
    yield all([
        takeLatest(Action.Types.PLAY_LIST, function*({part}) {
            const result = yield call(API.playList, part)
            console.log("[Saga VIDEO_LIST] playList", result);

            if (result) {
                yield put(Action.Creators.updateState({
                    list: result.data.items
                }))
            }
        })
    ])
}