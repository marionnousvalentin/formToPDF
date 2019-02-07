import { Page } from "app/src/components";
import React, { Component } from "react";
import { createPDF } from "../../lib/createPDF";
import Pdf from "react-native-pdf";
import { Alert, Dimensions, ScrollView, Text } from "react-native";

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
    return (
      <Page>
        {pdfSource && (
          <Pdf
            style={{
              flex: 1,
              width: Dimensions.get("window").width
            }}
            source={pdfSource}
            onError={error => Alert.alert(`${error}`)}
          />
        )}
      </Page>
    );
  }
}

type PropsType = {
  navigation: any
};
