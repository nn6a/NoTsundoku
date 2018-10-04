import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pomodoroOperations} from '../../state/ducks/pomodoro';

import Button from '../components/Button';

class Timer extends Component {
    state = {
        intervalID: null
    };

    componentDidUpdate (prevProps) {
        if (prevProps.isPomodoro) {
            if (prevProps.pomodoroDuration - prevProps.elapsedTime === 0) {
                prevProps.addPomodoroCount();
                this.handleStartBreak();
            }
        } else if (prevProps.isBreak) {
            if (prevProps.breakDuration - prevProps.elapsedTime === 0) {
                this.handleStartPomodoro();
            }
        }
    }

    startTimer = () => {
        const intervalID = setInterval(() => {
            this.props.addSecond();
        }, 1000);
        this.setState({intervalID});
    };

    stopTimer = () => {
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
        }
    };

    handleStartPomodoro = () => {
        this.stopTimer();
        this.props.startPomodoro();
        this.startTimer();
    };

    handleStartBreak = () => {
        this.stopTimer();
        this.props.startBreak();
        this.startTimer();
    };

    handleResetTimer = () => {
        this.stopTimer();
        this.props.resetTimer();
    };

    static formatTime (time) {
        let minutes = Math.floor(time / 60);
        time -= minutes * 60;
        let seconds = parseInt(time % 60, 10);
        // return '09:09' for example
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    render () {
        const {
            isPomodoro,
            isBreak,
            elapsedTime,
            pomodoroDuration,
            breakDuration,
            pomodoroCount
        } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {isPomodoro && Timer.formatTime(pomodoroDuration - elapsedTime)}
                        {isBreak && Timer.formatTime(breakDuration - elapsedTime)}
                    </Text>
                    <Text style={styles.count}>count: {pomodoroCount}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPomodoro && !isBreak && (
                        <Button iconName='play-circle' onPress={this.handleStartPomodoro}/>
                    )}
                    {isPomodoro && (
                        <Button iconName='stop-circle' onPress={this.handleResetTimer}/>
                    )}
                    {isBreak && (
                        <Button iconName='stop-circle' onPress={this.handleResetTimer}/>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000'
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    lower: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    time: {
        color: '#ffffff',
        fontSize: 120,
        fontWeight: '100'
    },
    count: {
        color: '#ffffff',
        fontSize: 16
    }
});

function mapStateToProps (state) {
    const {
        isPomodoro,
        isBreak,
        elapsedTime,
        pomodoroDuration,
        breakDuration,
        longBreakDuration,
        pomodoroCount
    } = state.pomodoroState;

    return {
        isPomodoro,
        isBreak,
        elapsedTime,
        pomodoroDuration,
        breakDuration,
        longBreakDuration,
        pomodoroCount
    };
}

function mapDispatchToProps (dispatch) {
    return {
        ...bindActionCreators(pomodoroOperations, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Timer);
