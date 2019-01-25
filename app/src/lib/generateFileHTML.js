import { style } from "./fileCSS";

export const generateFileHTML = values => {
  return `
  ${style}
  ${generateTitleSectionHTML()}
  ${generateNameSectionHTML(values.guest)}
  ${generateDateSectionHTML(values.date)}`;
};

const generateTitleSectionHTML = () =>
  `<div>
      <h2 class="block_title">BIRTHDAY PARTY !!!!</h2>
  </div>`;

const generateNameSectionHTML = name =>
  `<div>
      <span class="line">Dear ${name}, please come to my BIRTHDAY party!</span>
  </div>`;

const generateDateSectionHTML = date =>
  `<div>
      <span class="line">It will be on ${date}.</span>
  </div>`;
