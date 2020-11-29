import {all} from 'redux-saga/effects'
import appSaga from './app/saga'
import videoSaga from './video/saga'

export default function*() {
    yield all([
        appSaga(),
        videoSaga()
    ])
}