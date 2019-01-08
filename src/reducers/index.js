import {combineReducers} from 'redux';

const firstList = (state=[], action) => {
    switch(action.type) {
        case "getAll":
            return action.data.first
        case "remove_from_first": 
            return action.data.firstList
        case "remove_from_second":
            return action.data.firstList
        default: 
            return state
    }
}

const secondList = (state=[], action) => {
    switch(action.type) {
        case "getAll":
            return action.data.second
        case "remove_from_first": 
            return action.data.secondList
        case "remove_from_second":
            return action.data.secondList
        default: 
            return state
    }
}


export default combineReducers({firstList, secondList});