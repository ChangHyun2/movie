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

  console.log({ path1, path2 });

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

  const root = !path1
    ? "/"
    : path1 === "movies"
    ? "/movies"
    : "/" + path1 + "/" + path2;
  return (
    <footer>
      <ul
        className={`fixed w-full bottom-0 left-0 h-[50px] grid grid-cols-3 footer-shadow bg-white medium9 transition ${
          dir === "down" ? `translate-y-50px` : ""
        }`}
      >
        {[
          {
            icon: "home",
            label: "홈",
            path: "/",
            root: "/",
          },
          {
            icon: "thema",
            label: "테마보기",
            path: "/movies/theme/cities",
            root: "/movies",
          },
          {
            icon: "bookmark",
            label: "북마크",
            path: "/me/bookmark",
            root: "/me/bookmark",
          },
          // {
          //   icon: "mypage",
          //   label: "mypage",
          //   path: "/me/profile",
          //   root: "/me/profile",
          // },
        ].map(({ icon, label, path, root: tabRoot }) => (
          <li key={path}>
            <Link href={path}>
              <div className="flex flex-col items-center justify-center h-[50px]">
                <Image
                  src={`/tevi/icon-${icon}-26-${
                    tabRoot === root ? "fill" : "line"
                  }.svg`}
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
