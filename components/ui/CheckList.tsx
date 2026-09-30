import type { CheckItem } from '@/lib/types';

export function CheckList({
  items,
  icon = '✓',
  className = '',
}: {
  items: CheckItem[];
  icon?: string;
  className?: string;
}) {
  return (
    <ul className={`grid gap-5 list-none ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 items-start text-[14px] dark:text-[#D6DEEA]">
          <i className="flex-none w-[22px] h-[22px] rounded-[7px] bg-molten text-white grid place-items-center not-italic text-xs font-bold mt-0.5">
            {icon}
          </i>
          {typeof item === 'string' ? (
            <span>{item}</span>
          ) : (
            <span>
              <b>{item.bold}</b> {item.rest}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
