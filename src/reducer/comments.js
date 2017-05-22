import {ADD_NEW_COMMENT} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {
        case ADD_NEW_COMMENT:
            return {...state, [payload.commentId]: {...payload.fieldsData, id: payload.commentId}}
    }

    return state
}