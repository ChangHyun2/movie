"use client";

import { MovieDetail } from "@/app/types/crawler";
import { movieStorage } from "@/app/utils/movieStorage";
import { movieDetails } from "@/data/movieDetails";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BookmarkPage() {
  const [movies, setMovies] = useState<MovieDetail[]>([]);

  useEffect(() => {
    const bookmarks = movieStorage.get("bookmarks");
    const movieIds: string[] = [];

    Object.entries(bookmarks).forEach(([movieId, isBookmarked]) => {
      if (isBookmarked) {
        movieIds.push(movieId);
      }
    });

    const movies = movieIds.map((mid) => movieDetails[mid]);
    setMovies(movies);
  }, []);

  return (
    <div>
      <h1 className="h-[56px] flex items-center justify-center semi22">
        북마크
      </h1>
      <section className="mx-4">
        <div style={{ color: "#ff994f" }} className="regular14 mb-3">
          영화 총 {movies.length}개
        </div>
        <ul
          className="grid grid-cols-3 gap-2"
          style={{ height: "calc((100vw - 50px) / 3 * 4 / 3)" }}
        >
          {movies.map((m) => (
            <li
              className="relative"
              style={{ borderRadius: "6px", overflow: "hidden" }}
            >
              <Image src={m.Poster} alt={m.Title} fill />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
