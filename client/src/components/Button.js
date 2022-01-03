import React from 'react';

export default function Button({ text, danger }) {
  return (
    <button
      className={
        (danger ? 'bg-btndanger' : 'bg-btnprimary text-btntext') +
        ' w-full py-2 px-4 text-center font-semibold rounded-full'
      }
    >
      {text}
    </button>
  );
}
