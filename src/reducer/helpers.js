import {Record, Map} from 'immutable'

export const DefaultReducerState = Record({
    isLoading: false,
    isAllElemsLoaded: false,
    entities: new Map({})
})