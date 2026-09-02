import { Reveal } from '@/components/ui/Reveal';
import { InlineSvg } from './InlineSvg';

type ArchDiagramProps = {
  svg: string;
  captionTitle: string;
  captionNote: string;
  captionColor?: string;
};

export function ArchDiagram({ svg, captionTitle, captionNote, captionColor }: ArchDiagramProps) {
  return (
    <Reveal className="arch bg-carbon border border-line-dark rounded overflow-x-auto shadow-arch pt-[26px] px-[22px] pb-[18px]">
      <InlineSvg html={svg} />
      <div className="arch-cap flex justify-between gap-3.5 items-baseline flex-wrap mt-3.5 mx-1.5 mb-0.5">
        <b className="font-mono text-xs tracking-[0.18em] uppercase" style={{ color: captionColor ?? '#9F8BFF' }}>
          {captionTitle}
        </b>
        <span className="text-[13px] text-[#8CA0B8] font-mono">{captionNote}</span>
      </div>
    </Reveal>
  );
}
