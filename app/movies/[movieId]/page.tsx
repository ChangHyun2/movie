"use client";

import { themeColors } from "@/app/components/KeywordsList";
import MobileListScroll from "@/app/components/MobileListScroll";
import { movieDetails } from "@/data/movieDetails";
import {
  keywordEngsToKeywords,
  keywordsKor,
  movieIdsKeowrdEngs,
} from "@/data/ui";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MovieDetailPage({
  params,
}: {
  params: {
    movieId: string;
  };
}) {
  const router = useRouter();
  const { movieId } = params;
  const movieDetail = movieDetails[movieId];
  const {
    Title,
    Released,
    Runtime,
    Genre,
    Ratings,
    Rated,
    Plot,
    Director,
    Actors,
    Writer,
  } = movieDetail;
  const rating = Ratings[0].Value;

  const keywordEngs = (movieIdsKeowrdEngs as any)[movieId];

  return (
    <>
      <div className="flex justify-between items-center h-[56px]">
        <button onClick={() => router.back()} className="w-8 h-8"></button>
        <div></div>
        <div className="w-8 h-8"></div>
      </div>

      <section className="mb-3 relative mb-6">
        <div style={{ height: "calc(100vw * 4 / 3)" }}>
          <Image src={movieDetail.Poster} alt="movie poster" fill />
        </div>
      </section>

      <section className="mx-4">
        <h2 className="semi24 mb-2">{Title}</h2>
        <div className="regular16 mb-2">{Released}</div>
        <div className="medium18 mb-1">{Genre}</div>

        <div className="mb-2 flex items-center">
          <span className="mr-2">
            <Image src="/star.svg" width={10} height={10} alt="start icon" />
          </span>
          <span className="mr-2 medium18">
            {((rating.split("/")[0] / 10) * 5).toFixed(1)}
          </span>
          <span className="mr-2 regular-18">{Runtime.split(" ")[0]}분</span>
          <span className="regular18">{Rated}</span>
        </div>
      </section>

      <section className="mb-2">
        <button
          className="w-1/2 h-9"
          style={{ borderRight: "0.5px solid #ddd" }}
        >
          bm
        </button>
        <button
          className="w-1/2 h-9"
          style={{ borderLeft: "0.5px solid #ddd" }}
        >
          share
        </button>
      </section>

      {keywordEngs && (
        <section className="bg-[#F5F5F5] py-3 mb-6">
          <div className="mx-4 semi16 mb-2">이 영화의 키워드</div>
          <MobileListScroll>
            {keywordEngs.map((keng: string) => {
              return (
                <Link
                  key={keng}
                  href={`/movies/theme/keywords?keywordId=${
                    (keywordEngsToKeywords as any)[keng].id
                  }`}
                >
                  <div
                    className="button mr-2"
                    style={{
                      borderColor: themeColors.find((k) => k.eng === keng)
                        ?.color,
                    }}
                  >
                    #{(keywordsKor as any)[keng]}
                  </div>
                </Link>
              );
            })}
          </MobileListScroll>
        </section>
      )}

      <section>
        <div className="mx-4 bold16 mb-2">작품 정보</div>
        <p className="mx-4 mb-6">{Plot}</p>
        <div className="mx-4 bold16 mb-2">출연진</div>
        <MobileListScroll className="mb-6">
          {Actors.split(", ").map((actor: string) => (
            <div key={actor} className="box mr-2">
              {actor}
            </div>
          ))}
        </MobileListScroll>
        <div className="mx-4 bold16 mb-2">제작진</div>
        <MobileListScroll>
          <div className="box mr-2 flex flex-col items-center justify-center">
            <div className="mb-[2px]">{Director}</div>
            <div className="regular-14 text-[#656565]">감독</div>
          </div>
          {Writer.split(", ").map((w: string) => (
            <div
              key={w}
              className="box mr-2 flex flex-col items-center justify-center"
            >
              <div className="mb-[2px]">{w}</div>
              <div className="regular-14 text-[#656565]">작가</div>
            </div>
          ))}
        </MobileListScroll>
      </section>
    </>
  );
}

/*


    "Title": "PK",
    "Year": "2014",
    "Rated": "Not Rated",
    "Released": "19 Dec 2014",
    "Runtime": "153 min",
    "Genre": "Comedy, Drama, Sci-Fi",
    "Director": "Rajkumar Hirani",
    "Writer": "Rajkumar Hirani, Abhijat Joshi",
    "Actors": "Aamir Khan, Anushka Sharma, Sanjay Dutt",
    "Plot": "P. K. is a comedy of ideas about a stranger in the city, who asks questions that no one has asked before. They are innocent, child-like questions, but they bring about catastrophic answers. People who are set in their ways for generations, are forced to reappraise their world when they see it from PK's innocent eyes. In the process PK makes loyal friends and powerful foes. Mends broken lives and angers the establishment. P. K.'s childlike curiosity transforms into a spiritual odyssey for him and millions of others. The film is an ambitious and uniquely original exploration of complex philosophies. It is also a simple and humane tale of love, laughter and letting-go. Finally, it is a moving saga about a friendship between strangers from worlds apart.",
    "Language": "Hindi",
    "Country": "India",
    "Awards": "21 wins & 25 nominations",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_SX300.jpg",
    "Ratings": [
      { "Source": "Internet Movie Database", "Value": "8.1/10" },
      { "Source": "Rotten Tomatoes", "Value": "79%" }
    ],
    "Metascore": "N/A",
    "imdbRating": "8.1",
    "imdbVotes": "195,296",
    "imdbID": "tt2338151",
    "Type": "movie",
    "DVD": "26 Mar 2017",
    "BoxOffice": "$10,616,104",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"

*/
