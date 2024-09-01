import { defineElement } from '@jlarky/solid-wc';

import { createSignal, Show } from 'solid-js';

defineElement('reveal-button', { cats: '' }, ({ element, setRenderRoot }) => {
  setRenderRoot(element.attachShadow({ mode: 'open' }));
  return (props) => {
    const [selectedCat, setSelectedCat] = createSignal('');
    const onClick = () => {
      const catNames = props.cats.split(',');
      const index = Math.floor(Math.random() * catNames.length);
      const catName = catNames[index];
      if (catName) {
        setSelectedCat(catName);
      }
    };
    return (
      <>
        {selectedCat()}
        <Show when={!selectedCat()}>
          <button type="button" onClick={onClick}>
            Reveal one of the {props.cats?.split(',').length} cat names
          </button>
        </Show>
      </>
    );
  };
});
