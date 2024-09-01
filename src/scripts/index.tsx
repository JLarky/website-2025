import { defineElement } from '@jlarky/solid-wc';

defineElement('reveal-button', { cats: '' }, ({ element, setRenderRoot }) => {
  setRenderRoot(element.attachShadow({ mode: 'open' }));
  return (props) => {
    const onClick = () => {
      const catNames = props.cats.split(',');
      const index = Math.floor(Math.random() * catNames.length);
      const catName = catNames[index];
      element.innerText = catName ?? '';
    };
    return (
      <button type="button" onClick={onClick}>
        Reveal one of the {props.cats?.split(',').length} cat names
      </button>
    );
  };
});
