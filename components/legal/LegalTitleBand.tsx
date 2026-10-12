import { Wrap } from '@/components/ui/Wrap';

/** Tinted title band that opens every legal page: the page H1, plus the "Last updated" line on policies. */
export function LegalTitleBand({ title, updated }: { title: string; updated?: string }) {
  return (
    <div className="bg-gold/[0.06] border-b border-line">
      <Wrap className="py-[72px] mobile:py-12">
        <h1 className="text-[44px] mobile:text-[32px] leading-tight font-semibold">{title}</h1>
        {updated && <p className="mt-3 text-[15px] font-medium text-gold">{updated}</p>}
      </Wrap>
    </div>
  );
}
