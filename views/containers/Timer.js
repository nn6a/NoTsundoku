import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pomodoroOperations} from '../../state/ducks/pomodoro';

import Button from '../components/Button';

class Timer extends Component {
    componentWillReceiveProps (nextProps) {
        const currentProps = this.props;
        if (!currentProps.isPomodoro && nextProps.isPomodoro) {
            // start the interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({timerInterval});
        } else if (currentProps.isPomodoro && !nextProps.isPomodoro) {
            // stop the interval
            clearInterval(this.state.timerInterval);
        }
    }

    formatTime (time) {
        let minutes = Math.floor(time / 60);
        time -= minutes * 60;
        let seconds = parseInt(time % 60, 10);
        //      return '09:09' for example
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    render () {
        const {
            isPomodoro,
            elapsedTime,
            timerDuration,
            startPomodoro,
            restartTimer,
            pomodoroCount
        } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {this.formatTime(timerDuration - elapsedTime)}
                    </Text>
                    <Text style={styles.count}>count: {pomodoroCount}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPomodoro && (
                        <Button iconName='play-circle' onPress={startPomodoro}/>
                    )}
                    {isPomodoro && (
                        <Button iconName='stop-circle' onPress={restartTimer}/>
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
    const {isPomodoro, elapsedTime, timerDuration, pomodoroCount} = state;
    return {
        isPomodoro,
        elapsedTime,
        timerDuration,
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
