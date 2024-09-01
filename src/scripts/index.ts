class RevealButton extends HTMLElement {
  onClick = () => {
    const catNames = (this.getAttribute('cats') ?? '').split(',');
    const index = Math.floor(Math.random() * catNames.length);
    const catName = catNames[index];
    this.innerText = catName ?? '';
  };

  connectedCallback() {
    const btn = this.querySelector('button');
    if (btn) {
      btn.addEventListener('click', this.onClick);
      btn.innerText = `Reveal one of the ${this.getAttribute('cats')?.split(',').length} cat names`;
    }
  }
}

customElements.define('reveal-button', RevealButton);
