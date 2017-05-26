import {
    LOAD_ALL_COMMENTS,
    ADD_COMMENT,
    START,
    SUCCESS
} from '../constants'
import {arrayToMap} from '../utils'
import {Record} from 'immutable'
import {DefaultReducerState} from './helpers'

const CommentModel = Record({
    id: null,
    user: null,
    text: null,
    isLoading: false/*,
    isLoaded: false*/
})

const defaultState = new DefaultReducerState()


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case LOAD_ALL_COMMENTS + START:
            return state.set('isLoading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .set('isLoading', false)
                .set('entities', arrayToMap(response.records, CommentModel))

        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId})
    }

    return state
}