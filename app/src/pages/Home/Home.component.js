import { Page } from "app/src/components";
import React, { Component } from "react";
import { createPDF } from "../../lib/createPDF";
import Pdf from "react-native-pdf";
import {
  Alert,
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  Button
} from "react-native";

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
    this.getPdfSource().then(pdfSource =>
      this.setState({ source: pdfSource, text: "Commence ! ", showPdf: false })
    );
  }

  componentDidUpdate() {
    this.getPdfSource();
  }

  getPdfSource = async () => {
    const file = await createPDF(this.state.text);
    const source = {
      uri: `file://${file.filePath}`,
      cache: true
    };
    return source;
  };

  refreshPdf = () => {
    this.setState({ showPdf: !this.state.showPdf });
  };

  render() {
    const pdfSource = this.state.source;
    const showPdf = this.state.showPdf;
    return (
      <Page>
        {/* <ScrollView> */}
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ text, showPdf: false })}
          value={this.state.text}
        />
        <Button title={"Press to show PDF"} onPress={this.refreshPdf} />
        {showPdf && (
          <Pdf
            style={{
              flex: 1,
              width: Dimensions.get("window").width
            }}
            source={pdfSource}
            onError={error => Alert.alert(`${error}`)}
          />
        )}
        {/* </ScrollView> */}
      </Page>
    );
  }
}

type PropsType = {
  navigation: any
};
