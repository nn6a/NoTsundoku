import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Timer from '../views/containers/Timer';
import Home from '../views/containers/Home';

export default createBottomTabNavigator({
    Home: Home,
    Timer: Timer,
});
