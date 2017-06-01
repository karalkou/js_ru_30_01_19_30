import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, LOAD_ALL_COMMENTS, LOAD_COMMENTS_FOR_PAGE, SUCCESS} from '../constants'
import {arrayToMap} from '../utils'
import {DefaultReducerState} from './helpers'
import {Record, Map, List} from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const DefaultCommentsReducerState = Record({
    isLoading: false,
    isAllElemsLoaded: false,
    total: null,
    pagination: new Map([]),
    entities: new Map({})
});

const defaultState = new DefaultCommentsReducerState();


export default (state = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(['entities', randomId], new CommentModel({...payload.comment, id: randomId}))

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrayToMap(response, CommentModel))

        case LOAD_ALL_COMMENTS + SUCCESS:
            return state
                .set('isAllElemsLoaded', true)
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .mergeIn(['entities'], arrayToMap(response.records, CommentModel))
                .setIn(['pagination', payload.page], new List(response.records.map(record => record.id)))
                .set('total', response.total)
    }

    return state
}