import React from 'react';
import {createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Timer from '../views/containers/Timer';
import Home from '../views/containers/Home';
import SearchResultDetail from '../views/containers/SearchResultDetail';

const HomeStack = createStackNavigator({
    Home: Home,
    Detail: SearchResultDetail,
});

export default createBottomTabNavigator({
    Home: HomeStack,
    Timer: Timer,
});
