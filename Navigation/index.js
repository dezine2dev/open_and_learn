import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { fromLeft, fromBottom } from 'react-navigation-transitions';

import AuthScreen from '../screens/Auth';
import HomeScreen from '../screens/Home';
import ReportScreen from '../screens/Report';
import SettingScreen from '../screens/Settings';
import PolicyScreen from '../screens/Policy';
import TermsScreen from '../screens/Terms';
import LoadingScreen from '../screens/Loading';

const AuthStack = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    initialRouteName: 'Auth',
    headerMode: 'none',
    transitionConfig: () => fromLeft(2000)
  }
);

const SettingsStack = createStackNavigator(
  {
    Setting: SettingScreen,
    Policy: PolicyScreen,
    Terms: TermsScreen
  },
  {
    initialRouteName: 'Setting',
    headerMode: 'none'
  }
);
const AppStack = createStackNavigator(
  {
    App: HomeScreen,
    Report: ReportScreen,
    Setting: SettingsStack
  },
  {
    initialRouteName: 'App',
    headerMode: 'none',
    transitionConfig: () => fromLeft(2000)
  }
);
const PrimaryNav = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Auth'
  }
);

export default createAppContainer(PrimaryNav);
