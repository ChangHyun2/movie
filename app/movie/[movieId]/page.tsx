"use client";

import { movieDetails } from "@/data/movieDetails";
import Image from "next/image";
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

  return (
    <>
      <div className="my-3 mx-4 flex justify-between items-center h-[56px]">
        <button onClick={() => router.back()} className="w-8 h-8"></button>
        <div></div>
        <div className="w-8 h-8"></div>
      </div>
      <div
        className="my-3 mx-4 relative mb-4"
        style={{ height: "calc((100vw - 32px) * 4 / 3)" }}
      >
        <Image src={movieDetail.Poster} alt="movie poster" fill />
      </div>
      <section>
        <h2>{Title}</h2>
        <div>{Released}</div>
        <div>{Genre}</div>

        <div>
          <span>⭐️</span>
          <span>{rating}</span>
          <span>{}</span>
        </div>
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
