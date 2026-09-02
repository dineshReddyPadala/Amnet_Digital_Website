export function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div
      className="bg-paper py-[26px] px-6 rounded-r-xl border-t border-r border-b border-line transition-transform duration-200 hover:translate-x-1.5 hover:shadow-card"
      style={{ borderLeft: '3px solid', borderImage: 'linear-gradient(110deg,#5646E5 0%,#6D5CFF 48%,#38BDF8 115%) 1' }}
    >
      <h3 className="text-[17.5px] mb-2">{title}</h3>
      <ul className="list-none grid gap-1.5 mt-2.5">
        {items.map((item) => (
          <li key={item} className="text-[13.5px] text-muted flex gap-2">
            <span className="text-bronze flex-none">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
