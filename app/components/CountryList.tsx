"use client";

export type CountryListProps = {
  selected: string;
  onChange: (selected: string) => void;
  countries: { id: string; kor: string; emoji: string }[];
};

export default function CountryList({
  selected,
  onChange,
  countries,
}: CountryListProps) {
  return (
    <div>
      <ul className="overflow-auto flex snap-mandatory snap-x no-scrollbar">
        {countries.map(({ id, kor, emoji }) => (
          <li
            key={id}
            className="snap-start shrink-0 scroll-ml-4 relative first:pl-4 mr-4"
            onClick={() => onChange(id)}
          >
            <span className="mr-1">{emoji}</span>
            <span
              style={{
                color: id === selected ? "#000" : "#b9b9b9",
              }}
              className="semi16"
            >
              {kor}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
