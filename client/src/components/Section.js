import React from 'react';

export default function Section({ auth, children }) {
  return (
    <div className={(auth ? 'bg-bgtertiary' : 'bg-bgprimary') + ' min-h-screen py-4 px-8'}>
      {children}
    </div>
  );
}
