import RNHTMLtoPDF from "react-native-html-to-pdf";
import { generateFileHTML } from "./generateFlightReportHTML";

export const createPDF = async values => {
  const html = await generateFileHTML(values);
  const options = {
    html,
    fileName: "test",
    directory: "Documents"
  };
  return await RNHTMLtoPDF.convert(options);
};
