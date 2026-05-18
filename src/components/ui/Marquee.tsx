import { cn } from "@/lib/utils";

interface Props {
  items: string[];
  className?: string;
  separator?: React.ReactNode;
}

const DefaultSeparator = () => (
  <span aria-hidden className="mx-8 inline-block h-2 w-2 rounded-full bg-current opacity-60" />
);

export function Marquee({ items, className, separator }: Props) {
  const sep = separator ?? <DefaultSeparator />;
  const content = (
    <>
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className="inline-flex items-center">
          <span className="font-display italic">{item}</span>
          {sep}
        </span>
      ))}
    </>
  );

  return (
    <div className={cn("overflow-hidden whitespace-nowrap py-4", className)}>
      <div className="marquee-track inline-flex w-max">
        <div className="inline-flex items-center text-3xl md:text-4xl">{content}</div>
        <div aria-hidden className="inline-flex items-center text-3xl md:text-4xl">
          {content}
        </div>
      </div>
    </div>
  );
}
