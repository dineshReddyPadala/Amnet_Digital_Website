'use client';

import type { CaseTile } from '@/lib/types';
import { useHoverHighlight } from '@/hooks/useHoverHighlight';
import { CaseIcon } from './CaseIcon';

type Variant = 'overview' | 'challenge';

const GRID: Record<Variant, string> = {
  overview: 'grid-cols-3 gap-5',
  challenge: 'grid-cols-2 gap-8',
};

const TILE: Record<Variant, string> = {
  overview: 'min-h-[318px] px-10 py-10',
  challenge: 'min-h-[228px] px-7 py-8',
};

/** Client Overview stats and Challenges: icon cards where the gradient highlight follows hover. */
export function CaseTileGrid({ tiles, variant }: { tiles: CaseTile[]; variant: Variant }) {
  const { active, groupProps, itemProps } = useHoverHighlight();

  return (
    <div className={`grid ${GRID[variant]} mobile:grid-cols-1`} {...groupProps}>
      {tiles.map((tile, i) => {
        const on = i === active;
        return (
          <div
            key={tile.title}
            {...itemProps(i)}
            className={`flex flex-col justify-center transition-all duration-300 ${TILE[variant]} ${
              on
                ? 'bg-molten text-white shadow-[0_22px_40px_-16px_rgba(86,70,229,0.55)]'
                : `bg-white text-ink ${variant === 'overview' ? 'border border-line' : ''}`
            }`}
          >
            <CaseIcon name={tile.icon} className={on ? 'text-white' : 'text-muted'} />
            <h3
              className={`font-body font-normal leading-snug mt-6 ${
                variant === 'challenge' ? 'text-[16px] uppercase tracking-[0.04em]' : 'text-[17px] tracking-normal'
              }`}
            >
              {tile.title}
            </h3>
            <p className={`text-[13px] leading-relaxed mt-4 ${on ? 'text-white/90' : 'text-[#9AA0AA]'}`}>{tile.body}</p>
          </div>
        );
      })}
    </div>
  );
}
