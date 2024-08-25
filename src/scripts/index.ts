import $ from 'jquery';

$(document).ready(function () {
  async function onClick() {
    const response = await fetch('/api/cat-names');
    const json = await response.json();
    const { catNames } = json;
    const index = Math.floor(Math.random() * catNames.length);
    const catName = catNames[index];
    document.body.innerText = catName;
  }

  $('.center-button').on('click', onClick);
});
