// @flow

import React, { Component } from "react";
import { Platform, Text, View } from "react-native";

import { Page } from "app/src/components";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  props: PropsType;

  render() {
    return <Page />;
  }
}

type PropsType = {
  navigation: any
};
