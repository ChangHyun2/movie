import KeywordList from "@/app/components/KeywordsList";
import { Keyword } from "@/app/types/crawler";
import Image from "next/image";
import { useEffect } from "react";

export default function KeywordsCategoryModalPage({
  filter,
  toggleFilter,
  onClose,
  reset,
}: {
  filter: Keyword["id"][];
  toggleFilter: (keywordId: Keyword["id"]) => void;
  onClose: () => void;
  reset: () => void;
}) {
  useEffect(() => {
    const handler = () => {
      document.documentElement.style.setProperty(
        "--scroll-y",
        `${window.scrollY}px`
      );
    };
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
    window.addEventListener("scroll", handler);

    return () => {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col">
      <div className="flex items-center justify-between mx-4 my-3 mb-6 ">
        <div onClick={onClose}>
          <Image
            src="/tevi/icon-shevron-left-32-line.svg"
            width={32}
            height={32}
            alt="sl"
          />
        </div>
        <div className="text-neutral semi22">키워드 카테고리</div>
        <div></div>
      </div>
      <div className="relative mb-5 flex-1">
        <KeywordList filter={filter} toggleFilter={toggleFilter} />
      </div>
      <div className="w-full flex px-4 py-2 border-t-2">
        <button className="btn flex items-center" onClick={reset}>
          <span className="mr-1">
            <Image
              src="/tevi/icon-reset-16-line.svg"
              alt="init"
              width={16}
              height={16}
            />
          </span>
          <span className="text-[#656565]"> 초기화</span>
        </button>
        <button
          className="btn-primary flex-1"
          style={{ background: "#FF6B00" }}
          disabled={filter.length === 0}
        >
          키워드 보기
        </button>
      </div>
    </div>
  );
}
