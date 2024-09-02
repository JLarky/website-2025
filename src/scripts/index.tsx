import { defineElement } from '@jlarky/solid-wc';

defineElement('reveal-button', { cats: '' }, ({ element, setRenderRoot }) => {
  setRenderRoot(element.attachShadow({ mode: 'open' }));
  return (props) => <div>Hello from MyElement!</div>;
});
