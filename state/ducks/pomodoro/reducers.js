import CONSTANTS from "./constants";
import {START_POMODORO, RESTART_TIMER, ADD_SECOND} from "./types";

const initialState = {
    isPomodoro: false,
    isBreak: false,
    elapsedTime: 0,
    timerDuration: CONSTANTS.POMODORO_DURATION,
    pomodoroCount: 0
};

function applyStartTimer (state) {
    return {
        ...state,
        isPomodoro: true
    };
}

function applyRestartTimer (state) {
    return {
        ...state,
        isPomodoro: false,
        isBreak: false,
        elapsedTime: 0,
        timerDuration: CONSTANTS.POMODORO_DURATION
    };
}

function applyAddSecond (state) {
    const currentDuration = state.isBreak ? CONSTANTS.BREAK_DURATION : CONSTANTS.POMODORO_DURATION;
    const nextDuration = !state.isBreak ? CONSTANTS.BREAK_DURATION : CONSTANTS.POMODORO_DURATION;

    if (state.elapsedTime < currentDuration) {
        return {
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    } else {
        return {
            ...state,
            isBreak: !state.isBreak,
            timerDuration: nextDuration,
            elapsedTime: 0,
            pomodoroCount: state.isBreak ? state.pomodoroCount : (state.pomodoroCount + 1)
        };
    }
}

function pomodoroReducer (state = initialState, action) {
    switch (action.type) {
        case START_POMODORO:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state, action);
        default:
            return state;
    }
}

export default pomodoroReducer;
