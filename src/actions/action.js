
import data from '../data.json';


export function getList() {
    return function(dispatch, getState) {
        const curState = data;
        dispatch({
            type:"getAll",
            data: curState
        })
    }
}

export function removeFromFirstList(id) {
    console.log("id in action", id);
    return function(dispatch, getState) {
        const curState = JSON.parse(JSON.stringify(getState()));
        curState.secondList.push(curState.firstList[id]);
        curState.firstList.splice(id, 1);
        dispatch({
            type: "remove_from_first",
            data: curState
        })
    }
}

export function removeFromSecondList(id) {
    return function(dispatch, getState) {
        const curState = JSON.parse(JSON.stringify(getState()));
        curState.firstList.push(curState.secondList[id]);
        curState.secondList.splice(id, 1); 
        dispatch({
            type: "remove_from_second",
            data: curState
        })
    }
}
