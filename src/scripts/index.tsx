import { defineElement } from '@jlarky/solid-wc';

defineElement(
  'reveal-button',
  { cats: '' },
  ({ setRenderRoot, element, props }) => {
    const onClick = () => {
      const catNames = props.cats.split(',');
      const index = Math.floor(Math.random() * catNames.length);
      const catName = catNames[index];
      element.innerText = catName ?? '';
    };
    const btn = element.querySelector('button');
    if (btn) {
      btn.addEventListener('click', onClick);
      setRenderRoot(btn);
    }
    return (props) => {
      return <>{` one of the ${props.cats?.split(',').length} cat names`}</>;
    };
  }
);
