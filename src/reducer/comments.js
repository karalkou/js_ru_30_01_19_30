import {
    LOAD_ALL_COMMENTS,
    LOAD_ARTICLE_COMMENTS,
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
    text: null
})

const defaultState = new DefaultReducerState()


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case LOAD_ALL_COMMENTS + START:
            return state

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state.set('entities', arrayToMap(response.records, CommentModel))

        case LOAD_ARTICLE_COMMENTS + START:
            return state

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case ADD_COMMENT:
            return state.set(randomId, {...payload.comment, id: randomId})
    }

    return state
}