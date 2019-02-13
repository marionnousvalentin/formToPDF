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
      <h2 class="block_title">BOUM D'ANNIV !!!!</h2>
  </div>`;

const generateNameSectionHTML = name =>
  `<div class="column">
      <span class="block_title">Cher(e) ${name}, viens à ma BOUM d'anniversaire !</span>
  </div>`;

const generateDateSectionHTML = date =>
  `<div class="column">
      <span class="block_title">Ce sera le ${date}.</span>
  </div>`;
