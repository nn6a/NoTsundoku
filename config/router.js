import React from 'react';
import {createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Timer from '../views/containers/Timer';
import Home from '../views/containers/Home';
import SearchResultDetail from '../views/containers/SearchResultDetail';
import BookDetailSetting from '../views/containers/BookDetailSetting';

const HomeStack = createStackNavigator({
    Home: Home,
    SearchResultDetail: SearchResultDetail,
    BookDetailSetting: BookDetailSetting
});

export default createBottomTabNavigator({
    Home: HomeStack,
    Timer: Timer,
});
