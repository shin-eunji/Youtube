import {createActions, createReducer} from 'reduxsauce'

const initialState = {
    list: [],
}

export const Action = createActions({
    updateState: ['state'],
    playList: ['data']
}, {prefix: '/VIDEO'})

export const reducer = createReducer(initialState,{
    [Action.Types.UPDATE_STATE]: (state, {state: newState}) => ({
        ...state,
        ...newState
    })
})


