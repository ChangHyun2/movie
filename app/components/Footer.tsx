"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const prevPositionRef = useRef<number>();
  const [dir, setDir] = useState<"down" | "up">();
  const path = usePathname();

  const [, path1, path2] = path.split("/");

  useEffect(() => {
    const scrollHandler = function (this: Window, e: Event): void {
      const prevPosition = prevPositionRef.current;
      const scrollY = window.scrollY;
      if (prevPosition) {
        const dir = scrollY - prevPosition > 0 ? "down" : "up";

        setDir(dir);
      }

      prevPositionRef.current = scrollY;
    };

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <footer>
      <ul
        className={`fixed w-full bottom-0 left-0 h-[50px] grid grid-cols-4 footer-shadow bg-white medium9 transition ${
          dir === "down" ? `translate-y-50px` : ""
        }`}
      >
        {[
          {
            icon: "🏠",
            label: "홈",
            path: "/",
          },
          {
            icon: "🏠",
            label: "테마보기",
            path: "/movies/theme/cities",
          },
          {
            icon: "🏠",
            label: "북마크",
            path: "/me/bookmark",
          },
          {
            icon: "🏠",
            label: "마이페이지",
            path: "/me/profile",
          },
        ].map(({ icon, label, path }) => (
          <li key={path}>
            <Link href={path}>
              <div className="flex flex-col items-center justify-center h-[50px]">
                <Image
                  src="/icon-bookmark-26.svg"
                  width={26}
                  height={26}
                  alt="logo"
                />
                <div>{label}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
