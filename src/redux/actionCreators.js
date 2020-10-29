import store from './store'
import {bindActionCreators} from "redux";

import {Action as appAction} from './app/redux'

const {dispatch} = store;

const appActions = bindActionCreators(appAction.Creators, dispatch);



export default appActions;