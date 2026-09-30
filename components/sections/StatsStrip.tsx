import { Reveal } from '@/components/ui/Reveal';
import { Counter } from '@/components/ui/Counter';
import { Wrap } from '@/components/ui/Wrap';

export function StatsStrip() {
  return (
    <Wrap>
      <Reveal className="grid grid-cols-5 tablet:grid-cols-3 mobile:grid-cols-2 gap-[18px] tablet:gap-7 text-center">
        <div>
          <h3 className="text-[clamp(30px,3.6vw,44px)] font-extrabold tracking-[-0.03em] m-0">
            <Counter target={350} suffix="+" />
          </h3>
          <span className="text-[11.5px] tracking-[0.14em] uppercase text-muted">Technologists worldwide</span>
        </div>
        <div>
          <h3 className="text-[clamp(30px,3.6vw,44px)] font-extrabold tracking-[-0.03em] m-0">
            <Counter target={50} suffix="+" />
          </h3>
          <span className="text-[11.5px] tracking-[0.14em] uppercase text-muted">Solution competencies</span>
        </div>
        <div>
          <h3 className="text-[clamp(30px,3.6vw,44px)] font-extrabold tracking-[-0.03em] m-0">
            <Counter target={10} suffix="+" />
          </h3>
          <span className="text-[11.5px] tracking-[0.14em] uppercase text-muted">Centers of Excellence</span>
        </div>
        <div>
          <h3 className="text-[clamp(30px,3.6vw,44px)] font-extrabold tracking-[-0.03em] m-0">
            <Counter target={4} />
          </h3>
          <span className="text-[11.5px] tracking-[0.14em] uppercase text-muted">Global locations</span>
        </div>
        <div>
          <h3 className="text-[clamp(30px,3.6vw,44px)] font-extrabold tracking-[-0.03em] m-0">F500</h3>
          <span className="text-[11.5px] tracking-[0.14em] uppercase text-muted">Enterprises served</span>
        </div>
      </Reveal>
    </Wrap>
  );
}
