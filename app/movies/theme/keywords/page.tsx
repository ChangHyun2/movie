"use client";

import Header from "@/app/components/Header";
import MovieCardMdList from "@/app/components/MovieCardMdList";
import MovieCardSmList from "@/app/components/MovieCardSmList";
import { Keyword } from "@/app/types/crawler";
import { keywords, keywordsMovieSummaries } from "@/data/ui";
import exp from "constants";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import KeywordMoviesListSection from "../../../components/KeywordMovieListSection";
import KeywordsCategoryModalPage from "./KeywordsCategoryModalPage";
import Image from "next/image";

export default function KeywordsPage() {
  const params = useSearchParams();

  const [isFilterMode, setIsFilterMode] = useState(false);
  const [filter, setFilter] = useState<string[] | null>(null);
  const [showAlls, setShowAlls] = useState(
    Object.values(keywords as Keyword[]).reduce((acc, k) => {
      acc[k.id] = false;
      return acc;
    }, {} as { [key in string]: boolean })
  );
  const [showCategoryFilterPage, setShowCategoryFilterPage] = useState(false);

  const [sortOption, setSortOption] = useState<"boxOffice" | "abc">(
    "boxOffice"
  );

  const expand = (keywordId: string) => {
    setShowAlls((prev) => {
      return { ...prev, [keywordId]: true };
    });
  };

  const collapse = (keywordId: string) => {
    setShowAlls((prev) => {
      const updated = { ...prev };
      delete updated[keywordId];
      return updated;
    });
  };

  const loadFilter = () => {
    const keywords = JSON.parse(
      window.localStorage.getItem("keywords") || "[]"
    );

    const set = new Set<string>();
    const keywordId = params.get("keywordId");

    if (keywordId) {
      set.add(keywordId);
      setIsFilterMode(true);
    }

    keywords.forEach((k: string) => set.add(k));

    const filter = Array.from(set);

    setFilter(filter);
  };

  const toggleFilter = (keywordId: Keyword["id"]) =>
    setFilter((prev) => {
      if (prev === null) return null;
      const set = new Set(prev);

      if (set.has(keywordId)) {
        set.delete(keywordId);
      } else {
        set.add(keywordId);
      }

      return Array.from(set);
    });

  const openCategoryFilterPage = () => setShowCategoryFilterPage(true);
  const closeCategoryFilterPage = () => setShowCategoryFilterPage(false);

  useEffect(() => {
    loadFilter();
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (filter === null) return;

    window.localStorage.setItem("keywords", JSON.stringify(filter));
  }, [filter]);

  if (filter === null) return null;

  const handleChange = (e: any) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      <Header navigation fixed>
        {showCategoryFilterPage ? (
          <KeywordsCategoryModalPage
            reset={() => {
              setFilter([]);
              setIsFilterMode(false);
            }}
            filter={filter}
            toggleFilter={toggleFilter}
            onClose={closeCategoryFilterPage}
          />
        ) : isFilterMode ? (
          <div
            className="flex justify-between items-center bg-primary100 py-3 px-4"
            onClick={() => {
              setIsFilterMode(true);
              openCategoryFilterPage();
            }}
          >
            <div className="flex items-center ">
              <Image
                className="mr-1"
                src="/tevi/icon-fiter-24-fill.svg"
                width={24}
                height={24}
                alt="filter"
              />
              <div>키워드 카테고리</div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsFilterMode(false);
              }}
            >
              <Image
                src="/tevi/icon-delete-24-line.svg"
                width={24}
                height={24}
                alt="close"
              />
            </button>
          </div>
        ) : (
          <div
            className="flex justify-between items-center py-3 px-4 bg-neutral200"
            onClick={() => {
              setIsFilterMode(true);
              openCategoryFilterPage();
            }}
          >
            <div className="flex items-center">
              <Image
                className="mr-1"
                src="/tevi/icon-fiter-24-line.svg"
                width={24}
                height={24}
                alt="filter"
              />
              <div>키워드 카테고리</div>
            </div>
          </div>
        )}
        <div className="flex justify-end my-2 mx-4">
          <select onChange={handleChange} value={sortOption}>
            <option value="boxOffice">인기순</option>
            <option value="abc">가나다순</option>
          </select>
        </div>
      </Header>
      <main className="pt-[196px]">
        {isFilterMode
          ? filter.map((keywordId) => (
              <KeywordMoviesListSection
                key={keywordId}
                keywordId={keywordId}
                showAll={!!showAlls[keywordId]}
                expand={() => expand(keywordId)}
                collapse={() => collapse(keywordId)}
                sortOption={sortOption}
              />
            ))
          : keywords
              .filter(Boolean)
              .map((keyword) =>
                keyword ? (
                  <KeywordMoviesListSection
                    key={keyword.id}
                    keywordId={keyword.id}
                    showAll={!!showAlls[keyword.id]}
                    expand={() => expand(keyword.id)}
                    collapse={() => collapse(keyword.id)}
                    sortOption={sortOption}
                  />
                ) : null
              )}
      </main>
    </>
  );
}
