import {
    DELETE_ARTICLE,
    LOAD_ALL_ARTICLES,
    FAIL,
    SUCCESS,
    START,
    ADD_NEW_COMMENT
} from '../constants'
import {arrayToMap} from '../utils'

const defaultState = {
    isLoading: false,
    entities: arrayToMap([])
}


export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case DELETE_ARTICLE:
            //todo fix me
            return state.filter(article => article.id !== payload.id)

        case LOAD_ALL_ARTICLES + START:
            return {...state, isLoading: true}

        case LOAD_ALL_ARTICLES + SUCCESS:
            return {
                ...state,
                entities: arrayToMap(action.response),
                isLoading: false
            }

        case ADD_NEW_COMMENT:
            console.log('hoho');
            console.log('payload.commentId: ', payload.commentId);
            return {
                ...state,
                entities: {
                    ...state.entities,
                    [payload.articleId]: {
                        ...state.entities[payload.articleId],
                        comments: state.entities[payload.articleId].comments
                    }
                }
            }
    }

    return state
}