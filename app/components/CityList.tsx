"use client";

import { useEffect, useRef } from "react";
import { CitySummary } from "../types/crawler";

export type CityListProps = {
  selected: string;
  onChange: (selected: string) => void;
  cities: Pick<CitySummary, "id" | "kor">[];
};

export default function CityList({
  selected,
  onChange,
  cities,
}: CityListProps) {
  const selectedRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    console.log(selectedRef.current);
    selectedRef.current?.focus();
  }, []);

  return (
    <div className="relative">
      <ul className="w-full overflow-x-auto flex snap-x snap-mandatory no-scrollbar">
        {cities.map(({ id, kor }) => (
          <li
            tabIndex={0}
            ref={selected === id ? selectedRef : null}
            key={id}
            className="snap-start scroll-ml-4 shrink-0 relative first:pl-4"
            onClick={() => onChange(id)}
          >
            <span
              style={{
                color: id === selected ? "#000" : "#b9b9b9",
              }}
              className="mr-4 semi16"
            >
              {kor}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
