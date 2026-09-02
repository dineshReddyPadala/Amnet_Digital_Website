import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import { Wrap } from '@/components/ui/Wrap';

export function StatsStrip() {
  return (
    <Wrap>
      <Reveal className="grid grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 gap-[18px] tablet:gap-7 text-center">
        <div>
          <b className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold block tracking-[-0.03em]">
            <Counter target={350} suffix="+" />
          </b>
          <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted">Technologists worldwide</span>
        </div>
        <div>
          <b className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold block tracking-[-0.03em]">
            <Counter target={50} suffix="+" />
          </b>
          <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted">Solution competencies</span>
        </div>
        <div>
          <b className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold block tracking-[-0.03em]">
            <Counter target={10} suffix="+" />
          </b>
          <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted">Centers of Excellence</span>
        </div>
        <div>
          <b className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold block tracking-[-0.03em]">
            <Counter target={4} />
          </b>
          <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted">Global locations</span>
        </div>
        <div>
          <b className="font-display text-[clamp(30px,3.6vw,44px)] font-extrabold block tracking-[-0.03em]">F500</b>
          <span className="font-mono text-[11.5px] tracking-[0.14em] uppercase text-muted">Enterprises served</span>
        </div>
      </Reveal>
    </Wrap>
  );
}
