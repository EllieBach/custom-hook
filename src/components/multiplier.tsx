import React from 'react';
import { useMultiplier } from '../hooks/useMultiplier';

const Multiplier = ({ initialValue }: { initialValue: number }) => {
  const { multiply, dubbel } = useMultiplier(initialValue);
  return (
    <>
      <p>{multiply}</p>
      <button onClick={dubbel}>Double</button>
    </>
  );
};

export default Multiplier;
