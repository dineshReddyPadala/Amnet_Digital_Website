import { Reveal } from './Reveal';

type TimelineEntry = { year: string; title: string; body: string };

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative mt-10">
      <div
        className="absolute left-[9px] top-1.5 bottom-1.5 w-0.5 rounded-full"
        style={{ background: 'linear-gradient(180deg,#6D5CFF,#5646E5)' }}
      />
      {entries.map((entry) => (
        <Reveal key={entry.year} className="relative pb-[34px] pl-11">
          <span className="absolute left-0.5 top-[5px] w-4 h-4 rounded-full bg-gold shadow-[0_0_0_5px_rgba(109,92,255,0.18)]" />
          <span className="font-body text-[13px] text-bronze tracking-[0.14em] font-semibold">{entry.year}</span>
          <h3 className="text-lg my-1.5">{entry.title}</h3>
          <p className="text-muted text-[14px] max-w-[62ch]">{entry.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
