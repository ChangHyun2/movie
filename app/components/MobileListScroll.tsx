import { Children } from "react";

export default function MobileListScroll({
  children,
  className,
  scrollMl = 4,
  ...rest
}: {
  children: React.ReactNode;
  scrollMl?: number;
  className?: string;
}) {
  return (
    <ul
      className={
        "w-full overflow-x-auto flex snap-x snap-mandatory no-scrollbar " +
        (className || "")
      }
      {...rest}
    >
      {Children.map(children, (child, i) => (
        <li
          key={i}
          className={`snap-start scroll-ml-${scrollMl} shrink-0 relative first:pl-${scrollMl}`}
        >
          {child}
        </li>
      ))}
    </ul>
  );
}
