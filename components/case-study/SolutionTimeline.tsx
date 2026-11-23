import type { SolutionLayer } from '@/lib/types';

/** Solution Layers alternating either side of a numbered spine; one column with the spine on the left on mobile. */
export function SolutionTimeline({ layers }: { layers: SolutionLayer[] }) {
  return (
    <ol className="relative list-none max-w-[840px] mx-auto">
      <span
        aria-hidden
        className="absolute top-3 bottom-0 left-1/2 -translate-x-1/2 w-px bg-silver mobile:left-3"
      />
      {layers.map((layer, i) => {
        const left = i % 2 === 0;
        return (
          <li key={layer.title} className="relative grid grid-cols-[1fr_24px_1fr] gap-x-10 mobile:grid-cols-[24px_1fr] mobile:gap-x-4">
            <span className="col-start-2 row-start-1 mobile:col-start-1 relative z-[1] self-start w-6 h-6 rounded-full border border-silver bg-[#F4F4F7] grid place-items-center text-[9px] text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div
              className={`row-start-1 mt-12 mb-14 mobile:mt-8 mobile:mb-6 bg-white px-6 py-7 max-w-[370px] w-full ${
                left ? 'col-start-1 justify-self-end mr-8' : 'col-start-3 justify-self-start ml-8'
              } mobile:col-start-2 mobile:justify-self-stretch mobile:max-w-none mobile:m-0 mobile:mt-8 mobile:mb-6`}
            >
              <h3 className="font-body font-normal tracking-normal text-[14px] text-ink flex items-center gap-2">
                <i aria-hidden className="w-1.5 h-1.5 rounded-full bg-ink" />
                {layer.title}
              </h3>
              <p className="text-[12px] leading-relaxed text-[#9AA0AA] mt-4">{layer.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
