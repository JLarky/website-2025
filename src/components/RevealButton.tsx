import { createSignal, Show } from 'solid-js';

interface RevealButtonProps {
  cats: string[];
}

export default function RevealButton(props: RevealButtonProps) {
  const [revealedCat, setRevealedCat] = createSignal('');

  const handleReveal = () => {
    const index = Math.floor(Math.random() * props.cats.length);
    setRevealedCat(props.cats[index] ?? '');
  };

  return (
    <>
      {revealedCat()}
      <Show when={!revealedCat()}>
        <button onClick={handleReveal}>
          {revealedCat() || `Reveal one of the ${props.cats.length} cat names`}
        </button>
      </Show>
    </>
  );
}
