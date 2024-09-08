import { c } from 'atomico';

function myElement() {
  return (
    <host>
      <div>Hello from MyElement!</div>
    </host>
  );
}

export const MyElement = c(myElement);
customElements.define('my-element', MyElement);
