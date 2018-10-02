import {START_POMODORO, START_BREAK, RESTART_TIMER, ADD_SECOND} from "./types";

function startPomodoro() {
    return {
        type: START_POMODORO
    }
}

function startBreak() {
    return {
        type: START_BREAK
    }
}

function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

export default {
    startPomodoro,
    startBreak,
    restartTimer,
    addSecond
};
