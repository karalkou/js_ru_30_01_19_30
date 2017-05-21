import {GENERATE_ID} from '../constants';

export default store => next => action => {
    if(!action.generateId) return next(action);
    let uniqueId = 'id-' + Math.random().toString(36).substr(2, 16);
    next({...action, payload: {...action.payload, commentId: uniqueId}});
}