import { defineElementSSR } from '@jlarky/solid-wc';

import RevealButton from '../components/RevealButton';

export const element = defineElementSSR('reveal-button', RevealButton);

if (import.meta.env.SSR === false) {
  element.register();
}
