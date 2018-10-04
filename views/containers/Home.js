import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.home}>
                <Text>Hello, World!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
