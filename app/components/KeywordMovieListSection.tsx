"use client";

import MovieCardMdList from "@/app/components/MovieCardMdList";
import MovieCardSmList from "@/app/components/MovieCardSmList";
import { keywords, keywordsMovieSummaries } from "@/data/ui";
import Image from "next/image";
import { themeColors } from "./KeywordsList";

export default function KeywordMoviesListSection({
  keywordId,
  showAll,
  expand,
  collapse,
  sortOption,
}: {
  keywordId: string;
  showAll: boolean;
  expand: () => void;
  collapse: () => void;
  sortOption: "boxOffice" | "abc";
}) {
  const movies = (keywordsMovieSummaries as any)[keywordId];
  const keyword = (keywords as any).find((k: any) => k.id === keywordId);

  if (!movies) return null;
  if (!movies.length) return null;
  if (movies.length < 2) return null;

  const moreComponent = (
    <div className="h-full flex items-center">
      <button
        onClick={expand}
        className="w-[60px] flex flex-col items-center justify-center"
      >
        <div className="w-10 h-10 flex items-center justify-center mb-2">
          <Image
            src="/tevi/icon-chevron-right-22-line.svg"
            alt="more movies"
            width={22}
            height={22}
          />
        </div>
        <div>더보기</div>
      </button>{" "}
    </div>
  );

  const sortedMovies = movies.sort((a: any, b: any) => {
    if (sortOption === "boxOffice") {
      return b.boxOffice - a.boxOffice;
    } else {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  });

  const color = themeColors.find((k) => k.id === keywordId)?.color;

  return (
    <section className="mb-5" style={{ borderBottom: `1px solid #ddd` }}>
      <div className={`mx-4 button mb-3 w-fit`} style={{ borderColor: color }}>
        #{keyword.kor}
      </div>
      {showAll ? (
        <MovieCardMdList movies={sortedMovies} />
      ) : (
        <MovieCardSmList
          movies={sortedMovies.slice(0, 5)}
          moreComponent={sortedMovies.length > 5 && moreComponent}
        />
      )}
      <div className="flex items-center justify-center">
        {showAll && <button onClick={collapse}>접기</button>}
      </div>
      <div className="mb-5"></div>
    </section>
  );
}
