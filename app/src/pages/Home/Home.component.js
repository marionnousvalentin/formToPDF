import { Page } from "app/src/components";
import React, { Component } from "react";
import { createPDF } from "../../lib/createPDF";
import Pdf from "react-native-pdf";
import { Alert, Text } from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  props: PropsType;

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.getPdfSource().then(pdfSource => this.setState({ source: pdfSource }));
  }

  getPdfSource = async () => {
    const file = await createPDF("yo");
    const source = {
      uri: `file://${file.filePath}`,
      cache: true
    };
    return source;
  };

  render() {
    const pdfSource = this.state.source;
    console.log("f", pdfSource);
    return (
      <Page>
        <Text>{JSON.stringify(pdfSource)}</Text>
        {pdfSource && (
          <Pdf source={pdfSource} onError={error => Alert.alert(`${error}`)} />
        )}
      </Page>
    );
  }
}

type PropsType = {
  navigation: any
};
