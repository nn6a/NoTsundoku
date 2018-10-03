import CONSTANTS from "./constants";
import {START_POMODORO, START_BREAK, RESET_TIMER, ADD_SECOND, ADD_POMODORO_COUNT} from "./types";

const initialState = {
    isPomodoro: false,
    isBreak: false,
    elapsedTime: 0,
    pomodoroDuration: CONSTANTS.POMODORO_DURATION,
    breakDuration: CONSTANTS.BREAK_DURATION,
    longBreakDuration: CONSTANTS.LONG_BREAK_DURATION,
    pomodoroCount: 0
};

// function startPomodoro (state) {
//     return {
//         ...state,
//         isPomodoro: true
//     };
// }


// function applyRestartTimer (state) {
//     return {
//         ...state,
//         isPomodoro: false,
//         isBreak: false,
//         elapsedTime: 0,
//         timerDuration: CONSTANTS.POMODORO_DURATION
//     };
// }

// function applyAddSecond (state) {
//     const currentDuration = state.isBreak ? CONSTANTS.BREAK_DURATION : CONSTANTS.POMODORO_DURATION;
//     const nextDuration = !state.isBreak ? CONSTANTS.BREAK_DURATION : CONSTANTS.POMODORO_DURATION;
//
//     if (state.elapsedTime < currentDuration) {
//         return {
//             ...state,
//             elapsedTime: state.elapsedTime + 1
//         };
//     } else {
//         return {
//             ...state,
//             isBreak: !state.isBreak,
//             timerDuration: nextDuration,
//             elapsedTime: 0,
//             pomodoroCount: state.isBreak ? state.pomodoroCount : (state.pomodoroCount + 1)
//         };
//     }
// }

function pomodoroReducer (state = initialState, action) {
    switch (action.type) {
        case START_POMODORO:
            return {
                ...state,
                isPomodoro: true,
                isBreak: false,
                elapsedTime: 0
            };
        case START_BREAK:
            return {
                ...state,
                isPomodoro:false,
                isBreak: true,
                elapsedTime: 0
            };
        case RESET_TIMER:
            return {
                ...state,
                isPomodoro: false,
                isBreak: false,
                elapsedTime: 0,
            };
        case ADD_SECOND:
            return {
                ...state,
                elapsedTime: state.elapsedTime + 1
            };
        case ADD_POMODORO_COUNT:
            return {
                ...state,
                pomodoroCount: state.pomodoroCount + 1
            };
        default:
            return state;
    }
}

export default pomodoroReducer;
