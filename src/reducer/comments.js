import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'
import {
    ADD_NEW_COMMENT
} from '../constants'

const defaultState = arrayToMap(defaultComments)


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_NEW_COMMENT:
            console.log('haha');
            return null
    }

    return state
}