import { Reveal } from './Reveal';

export function PlainStats({ stats }: { stats: [string, string][] }) {
  return (
    <Reveal className="grid grid-cols-4 tablet:grid-cols-2 gap-[18px] text-center">
      {stats.map(([value, label]) => (
        <div key={value}>
          <b className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold block tracking-[-0.03em]">
            <em className="not-italic bg-molten bg-clip-text text-transparent">{value}</em>
          </b>
          <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-[#8B98AC]">{label}</span>
        </div>
      ))}
    </Reveal>
  );
}
