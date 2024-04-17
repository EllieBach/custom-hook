import { useState } from 'react';

export const useMultiplier = (initialValue: number) => {
  const [multiply, setMultiply] = useState<number>(initialValue);

  const dubbel = () => {
    setMultiply((v) => v * 2);
  };

  return { multiply, dubbel };
};
