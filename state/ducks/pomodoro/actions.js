import {START_POMODORO, START_BREAK, RESET_TIMER, ADD_SECOND, ADD_POMODORO_COUNT} from "./types";

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

function resetTimer() {
    return {
        type: RESET_TIMER
    }
}

function addSecond() {
    return {
        type: ADD_SECOND
    }
}

function addPomodoroCount() {
    return {
        type: ADD_POMODORO_COUNT
    }
}

export default {
    startPomodoro,
    startBreak,
    resetTimer,
    addSecond,
    addPomodoroCount
};
