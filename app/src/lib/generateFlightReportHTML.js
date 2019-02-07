import { style } from "./fileCSS";

export const generateFileHTML = async values => {
  return `
  ${style}
  ${generateFuelSectionHTML(values)}`;
};

const generateFuelSectionHTML = values =>
  `<div class="column">
      <h2 class="block_title">${values}</h2>
  </div>`;
