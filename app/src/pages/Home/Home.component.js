import { Page } from "app/src/components";
import React, { Component } from "react";
import { createPDF } from "../../lib/createPDF";
import Pdf from "react-native-pdf";
import {
  Alert,
  Dimensions,
  Text,
  TextInput,
  Button,
  StyleSheet
} from "react-native";

export default class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };
  props: PropsType;

  constructor() {
    super();
    this.state = {
      values: {}
    };
  }

  componentDidMount() {
    this.getPdfSource().then(pdfSource =>
      this.setState({
        source: pdfSource,
        values: { guest: "", date: "" },
        showPdf: false
      })
    );
  }

  componentDidUpdate() {
    this.getPdfSource();
  }

  getPdfSource = async () => {
    const file = await createPDF(this.state.values);
    const source = {
      uri: `file://${file.filePath}`,
      cache: true
    };
    return source;
  };

  refreshPdf = () => {
    this.setState({ showPdf: true });
  };

  render() {
    const pdfSource = this.state.source;
    const showPdf = this.state.showPdf;
    return (
      <Page>
        <TextInput
          style={styles.textInput}
          onChangeText={text =>
            this.setState({
              values: { ...this.state.values, guest: text },
              showPdf: false
            })
          }
          value={this.state.values.guest}
          placeholder="Qui est ton invité ?"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={date =>
            this.setState({
              values: { ...this.state.values, date: date },
              showPdf: false
            })
          }
          value={this.state.values.date}
          placeholder="Quelle est la date ?"
        />
        <Button title={"Montre-moi !"} onPress={this.refreshPdf} />
        {showPdf && (
          <Pdf
            style={styles.pdf}
            source={pdfSource}
            onError={error => Alert.alert(`${error}`)}
          />
        )}
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  textInput: { height: 40, borderColor: "gray", borderWidth: 1, margin: 8 },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignSelf: "center"
  }
});

type PropsType = {
  navigation: any
};
