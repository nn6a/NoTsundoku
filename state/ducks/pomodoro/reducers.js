import CONSTANTS from "./constants";
import {START_TIMER, RESTART_TIMER, ADD_SECOND} from "./types";

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timerDuration: CONSTANTS.TIMER_DURATION
};

function applyStartTimer(state) {
    return {
        ...state,
        isPlaying: true
    };
}

function applyRestartTimer(state) {
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0,
        timerDuration: CONSTANTS.TIMER_DURATION
    };
}

function applyAddSecond(state) {
    if (state.elapsedTime < CONSTANTS.TIMER_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    } else {
        return {
            ...state,
            isPlaying: false
        };
    }
}

function pomodoroReducer(state = initialState, action) {
    switch (action.type) {
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
            return state;
    }
}

export default pomodoroReducer;
