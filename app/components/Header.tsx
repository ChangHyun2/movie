"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ navigation }: { navigation?: boolean }) {
  const path = usePathname();
  const [, , type] = path.split("/");

  return (
    <header>
      <div className="h-[56px] flex justify-center items-center">
        <h1 className="hidden">
          <span>TEVI</span>
        </h1>
        <Link href="/">
          <Image src={"/logo.svg"} alt="service-logo" width={88} height={31} />
        </Link>
      </div>
      {navigation && (
        <ul className="grid grid-cols-3 h-9">
          <li className="relative flex items-center justify-center">
            <span className="semi15" style={{ fontWeight: 400 }}>
              <Link href="/movies/cities">도시별 보기</Link>
            </span>
            {type === "cities" && (
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#1c1c1c]"></div>
            )}
          </li>
          <li className="relative flex items-center justify-center">
            <span className="semi15" style={{ fontWeight: 400 }}>
              <Link href="/movies/countries">나라별 보기</Link>
            </span>
            {type === "countries" && (
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#1c1c1c]"></div>
            )}
          </li>
          <li className="relative flex items-center justify-center">
            <span className="semi15" style={{ fontWeight: 400 }}>
              <Link href="/movies/keywords">테마 키워드</Link>
            </span>
            {type === "keywords" && (
              <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#1c1c1c]"></div>
            )}
          </li>
        </ul>
      )}
    </header>
  );
}
