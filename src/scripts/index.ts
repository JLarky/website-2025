class RevealButton extends HTMLElement {
  onClick = async () => {
    const response = await fetch('/api/cat-names');
    const json = await response.json();
    const { catNames } = json;
    const index = Math.floor(Math.random() * catNames.length);
    const catName = catNames[index];
    this.innerText = catName;
  }

  connectedCallback() {
    this.querySelector('button')?.addEventListener('click', this.onClick);
  }
}

customElements.define('reveal-button', RevealButton);
