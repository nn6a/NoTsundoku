import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pomodoroOperations} from '../../state/ducks/pomodoro';

import Button from '../components/Button';

class Timer extends Component {
    componentWillReceiveProps (nextProps) {
        const currentProps = this.props;
        if (!currentProps.isPlaying && nextProps.isPlaying) {
            // start the interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({timerInterval});
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
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
            isPlaying,
            elapsedTime,
            timerDuration,
            startTimer,
            restartTimer
        } = this.props;
        return (
            <View style={styles.container}>
                <StatusBar barStyle={'light-content'}/>
                <View style={styles.upper}>
                    <Text style={styles.time}>
                        {this.formatTime(timerDuration - elapsedTime)}
                    </Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && (
                        <Button iconName='play-circle' onPress={startTimer}/>
                    )}
                    {isPlaying && (
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
    }
});

function mapStateToProps (state) {
    const {isPlaying, elapsedTime, timerDuration} = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
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
