import {
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES,
    LOAD_ALL_COMMENTS,
    FAIL, SUCCESS, START,
    ADD_NEW_COMMENT } from '../constants'
import {arrayToMap} from '../utils'

const defaultState = {
    entities: arrayToMap([])
};

export default (state = defaultState, action) => {
    const {type, payload} = action;

    switch (type) {

        case LOAD_ALL_COMMENTS + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response.records)
            };

        case ADD_NEW_COMMENT:
            let comments = {
                ...state.entities,
                //вот этот спрэд лишний
                ...{
                    [payload.commentId]: {
                        ...payload.comment,
                        id: payload.commentId
                    }
                }
            };

            return {
                ...state, ...{entities: comments}
            }
    }

    return state
}