// @flow

import React, { Component } from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

import * as Pages from "app/src/pages";

export const AppNavigator = createStackNavigator({
  home: {
    screen: Pages.Home
  }
});

export default createAppContainer(AppNavigator);
