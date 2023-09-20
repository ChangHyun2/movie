import { useState } from "react";

type SelectSortOptionProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SelectSortOption({
  value,
  onChange,
}: SelectSortOptionProps) {
  const [option, setOption] = useState(value);

  return (
    <select>
      <option>인기순</option>
      <option>가나다순</option>
      <option>평점순</option>
    </select>
  );
}
