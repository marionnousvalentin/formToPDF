import { style } from "./fileCSS";

export const generateFileHTML = async values => {
  return `
  ${style}
  ${generateTitleSectionHTML()}
  ${generateNameSectionHTML(values.guest)}
  ${generateDateSectionHTML(values.date)}`;
};

const generateTitleSectionHTML = () =>
  `<div class="column">
      <h2 class="block_title">BIRTHDAY PARTY!!!!</h2>
  </div>`;

const generateNameSectionHTML = name =>
  `<div class="column">
      <span class="block_title">Dear ${name}, please come to my party!</span>
  </div>`;

const generateDateSectionHTML = date =>
  `<div class="column">
      <span class="block_title">It takes place on ${date}.</span>
  </div>`;
