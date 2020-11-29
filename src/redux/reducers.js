import {combineReducers} from "redux";
import {reducer as appReducer} from './app/redux';
import {reducer as videoReducer} from './video/redux';

const reducers = combineReducers({
    app: appReducer,
    video: videoReducer
});


export default reducers;