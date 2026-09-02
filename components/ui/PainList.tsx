type PainItem = { n: string; bold: string; rest: string };

export function PainList({ items, light = false, className = '' }: { items: PainItem[]; light?: boolean; className?: string }) {
  return (
    <div className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <div
          key={item.n}
          className={`flex gap-3.5 items-start py-[18px] px-5 rounded-[14px] ${
            light ? 'border border-line bg-paper' : 'border border-line-dark bg-white/[0.03]'
          }`}
        >
          <i className="flex-none min-w-[30px] h-[26px] rounded-lg bg-gold/[0.14] text-gold grid place-items-center not-italic text-xs font-semibold tracking-[0.08em] font-mono px-1.5">
            {item.n}
          </i>
          <p className={`text-[15px] m-0 ${light ? 'text-muted' : 'text-[#C4CDDC]'}`}>
            {light ? (
              item.rest
            ) : (
              <>
                <b className="text-white">{item.bold}</b> {item.rest}
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
