import { createSignal, Show } from 'solid-js';

import { getCatNames } from '../utils/catData';
const cats = getCatNames();

export default function RevealButton() {
  const [revealedCat, setRevealedCat] = createSignal('');

  const handleReveal = () => {
    const index = Math.floor(Math.random() * cats.length);
    setRevealedCat(cats[index] ?? '');
  };

  return (
    <div>
      {revealedCat()}
      <Show when={!revealedCat()}>
        <button onClick={handleReveal}>
          {revealedCat() ||
            `Reveal one of the ${(cats || []).length} cat names`}
        </button>
      </Show>
    </div>
  );
}
