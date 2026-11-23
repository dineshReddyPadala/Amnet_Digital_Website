'use client';

import { useState } from 'react';

/**
 * One highlighted item per group: it follows the hovered (or focused) item and
 * rests on the first item when nothing is hovered.
 */
export function useHoverHighlight() {
  const [active, setActive] = useState(0);

  const groupProps = { onMouseLeave: () => setActive(0) };
  const itemProps = (index: number) => ({
    onMouseEnter: () => setActive(index),
    onFocus: () => setActive(index),
  });

  return { active, groupProps, itemProps };
}
