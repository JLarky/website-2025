import { defineElement } from '@jlarky/solid-wc';

import RevealButton from '../components/RevealButton';

defineElement('reveal-button', { cats: '' }, ({ element, setRenderRoot }) => {
  setRenderRoot(element.attachShadow({ mode: 'open' }));
  return (props) => <RevealButton cats={props.cats.split(',')} />;
});
