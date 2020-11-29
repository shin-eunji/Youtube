import store from './store'
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux';
import {Action as videoAction} from './video/redux';

const {dispatch} = store;

export const appActions = bindActionCreators(appAction.Creators, dispatch);
export const videoActions = bindActionCreators(videoAction.Creators, dispatch);



export default appActions;