async function onClick() {
  const response = await fetch('/api/cat-names');
  const json = await response.json();
  const { catNames } = json;
  const index = Math.floor(Math.random() * catNames.length);
  const catName = catNames[index];
  document.body.innerText = catName;
}

class RevealButton extends HTMLElement {
  connectedCallback() {
    this.querySelector('button')?.addEventListener('click', onClick);
  }
}

customElements.define('reveal-button', RevealButton);
